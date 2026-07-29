"use client";

import { useState } from "react";
import { 
  Lock, 
  ShieldCheck, 
  DollarSign, 
  Users, 
  Save, 
  Plus, 
  Trash2, 
  Check, 
  LogOut, 
  ExternalLink,
  Upload,
  RefreshCw
} from "lucide-react";
import { PRICING_ITEMS, PricingItem } from "@/data/pricing";
import { CLINICAL_TEAM, TeamMember } from "@/data/team";
import { cn } from "@/lib/utils";

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [pinInput, setPinInput] = useState<string>("");
  const [authError, setAuthError] = useState<string>("");

  const [activeTab, setActiveTab] = useState<"pricing" | "team" | "export">("pricing");
  const [pricingList, setPricingList] = useState<PricingItem[]>(PRICING_ITEMS);
  const [teamList, setTeamList] = useState<TeamMember[]>(CLINICAL_TEAM);

  const [saving, setSaving] = useState<boolean>(false);
  const [uploading, setUploading] = useState<boolean>(false);
  const [statusMsg, setStatusMsg] = useState<{ type: "success" | "error"; text: string } | null>(null);

  // Authentication Handler
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (pinInput === "1234" || pinInput === "smilehub2026") {
      setIsAuthenticated(true);
      setAuthError("");
    } else {
      setAuthError("Incorrect Admin PIN. Please enter 1234 or smilehub2026.");
    }
  };

  // Global CDN Image Uploader (ImgBB API - 100% visible across all devices globally)
  const handleImageUpload = async (
    e: React.ChangeEvent<HTMLInputElement>,
    onSuccess: (url: string) => void
  ) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setUploading(true);
    setStatusMsg(null);

    try {
      // First compress client-side for ultra-fast global upload
      const reader = new FileReader();
      reader.onload = async (event) => {
        const img = new Image();
        img.onload = async () => {
          const canvas = document.createElement("canvas");
          const MAX_WIDTH = 1000;
          const MAX_HEIGHT = 1000;
          let width = img.width;
          let height = img.height;

          if (width > height) {
            if (width > MAX_WIDTH) {
              height = Math.round((height * MAX_WIDTH) / width);
              width = MAX_WIDTH;
            }
          } else {
            if (height > MAX_HEIGHT) {
              width = Math.round((width * MAX_HEIGHT) / height);
              height = MAX_HEIGHT;
            }
          }

          canvas.width = width;
          canvas.height = height;
          const ctx = canvas.getContext("2d");
          if (ctx) {
            ctx.drawImage(img, 0, 0, width, height);
            canvas.toBlob(async (blob) => {
              if (!blob) {
                setUploading(false);
                return;
              }

              try {
                // Upload compressed blob to ImgBB Global CDN
                const formData = new FormData();
                formData.append("image", blob, file.name || "doctor.jpg");

                // Public ImgBB CDN API Key
                const res = await fetch("https://api.imgbb.com/1/upload?key=6d207e02198a847e5b2a06fe30e40b65", {
                  method: "POST",
                  body: formData,
                });
                const data = await res.json();

                if (data.success && data.data?.url) {
                  onSuccess(data.data.url);
                  setStatusMsg({ type: "success", text: "Photo uploaded to Global CDN! Visible on all devices." });
                } else {
                  // Fallback to compressed Data URL
                  const fallbackDataUrl = canvas.toDataURL("image/jpeg", 0.85);
                  onSuccess(fallbackDataUrl);
                  setStatusMsg({ type: "success", text: "Photo updated locally!" });
                }
              } catch (uploadErr) {
                const fallbackDataUrl = canvas.toDataURL("image/jpeg", 0.85);
                onSuccess(fallbackDataUrl);
                setStatusMsg({ type: "success", text: "Photo updated!" });
              } finally {
                setUploading(false);
              }
            }, "image/jpeg", 0.85);
          }
        };

        if (event.target?.result) {
          img.src = event.target.result as string;
        }
      };

      reader.readAsDataURL(file);
    } catch (err) {
      setStatusMsg({ type: "error", text: "Error reading image." });
      setUploading(false);
    }
  };

  // Save Pricing Handler
  const savePricing = async () => {
    setSaving(true);
    setStatusMsg(null);

    // Persist to local browser storage for instant live site sync across pages
    try {
      localStorage.setItem("smilehub_pricing_data", JSON.stringify(pricingList));
    } catch (e) {}

    try {
      const res = await fetch("/api/admin/update", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "pricing",
          data: pricingList,
          password: pinInput || "1234",
        }),
      });
      const data = await res.json();
      if (res.ok) {
        setStatusMsg({ type: "success", text: "Treatment fee guide updated & published live!" });
      } else {
        setStatusMsg({ type: "error", text: data.error || "Failed to save pricing." });
      }
    } catch (err: any) {
      setStatusMsg({ type: "error", text: "Error saving pricing data." });
    } finally {
      setSaving(false);
    }
  };

  // Save Team Handler
  const saveTeam = async () => {
    setSaving(true);
    setStatusMsg(null);

    // Persist to local browser storage for instant live site sync across pages
    try {
      localStorage.setItem("smilehub_team_data", JSON.stringify(teamList));
    } catch (e) {}

    try {
      const res = await fetch("/api/admin/update", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "team",
          data: teamList,
          password: pinInput || "1234",
        }),
      });
      const data = await res.json();
      if (res.ok) {
        setStatusMsg({ type: "success", text: "Clinical team profiles updated live!" });
      } else {
        setStatusMsg({ type: "error", text: data.error || "Failed to save team." });
      }
    } catch (err: any) {
      setStatusMsg({ type: "error", text: "Error saving team data." });
    } finally {
      setSaving(false);
    }
  };

  // Update Pricing Item Field
  const updatePricingItem = (index: number, field: keyof PricingItem, value: any) => {
    const updated = [...pricingList];
    updated[index] = { ...updated[index], [field]: value };
    setPricingList(updated);
  };

  // Update Team Item Field
  const updateTeamItem = (index: number, field: keyof TeamMember, value: any) => {
    const updated = [...teamList];
    updated[index] = { ...updated[index], [field]: value };
    setTeamList(updated);
  };

  // Add New Treatment Item
  const addPricingItem = () => {
    const newItem: PricingItem = {
      id: `treatment-${Date.now()}`,
      name: "New Dental Service",
      category: "consultation",
      categoryLabel: "Consultation & Care",
      startingPrice: "LKR 5,000",
      description: "Service description here...",
      inclusions: ["Initial examination", "Consultation"],
      image: "/images/clinic-1.png",
    };
    setPricingList([...pricingList, newItem]);
  };

  // Remove Treatment Item
  const removePricingItem = (index: number) => {
    setPricingList(pricingList.filter((_, i) => i !== index));
  };

  // Render Login Gate if Not Authenticated
  if (!isAuthenticated) {
    return (
      <main className="min-h-screen bg-[#071d2b] flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-[#0b3551] rounded-3xl p-8 border border-white/15 shadow-2xl text-white space-y-6">
          <div className="text-center space-y-2">
            <div className="h-14 w-14 rounded-2xl bg-[color:var(--accent-strong)]/20 border border-sky-400/30 flex items-center justify-center mx-auto text-sky-300">
              <Lock className="h-7 w-7" />
            </div>
            <h1 className="font-display text-2xl font-bold">Smile Hub Admin</h1>
            <p className="text-xs text-sky-200/80">
              Enter clinic admin PIN to manage prices & team profiles.
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-sky-200 uppercase tracking-wider mb-2">
                Admin PIN / Password
              </label>
              <input
                type="password"
                placeholder="Enter PIN (e.g. 1234)"
                value={pinInput}
                onChange={(e) => setPinInput(e.target.value)}
                className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-sky-300 text-sm font-mono tracking-widest text-center"
              />
            </div>

            {authError && (
              <p className="text-xs font-semibold text-rose-300 text-center bg-rose-950/50 p-2.5 rounded-lg border border-rose-500/30">
                {authError}
              </p>
            )}

            <button
              type="submit"
              className="w-full py-3.5 px-4 rounded-xl bg-[color:var(--accent-strong)] hover:bg-white hover:text-[#0b3551] text-white font-bold text-sm transition-all shadow-lg flex items-center justify-center gap-2"
            >
              <ShieldCheck className="h-4 w-4" />
              <span>Unlock Admin Portal</span>
            </button>
          </form>

          <div className="pt-2 border-t border-white/10 text-center">
            <p className="text-[11px] text-white/50">
              Default Admin PIN: <code className="text-sky-300 font-mono">1234</code> or <code className="text-sky-300 font-mono">smilehub2026</code>
            </p>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#071d2b] text-white pb-20">
      {/* Top Admin Header */}
      <header className="sticky top-0 z-40 bg-[#0b3551]/95 backdrop-blur-md border-b border-white/15 px-4 py-3.5">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-[color:var(--accent-strong)] flex items-center justify-center text-white font-bold shadow-md">
              SH
            </div>
            <div>
              <h1 className="font-display text-base sm:text-lg font-bold leading-tight">
                Smile Hub Admin Portal
              </h1>
              <p className="text-[11px] text-sky-300 font-medium">
                Live Pricing & Clinical Team Manager
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-xs font-semibold text-sky-200 transition-all border border-white/15"
            >
              <span>View Website</span>
              <ExternalLink className="h-3.5 w-3.5" />
            </a>

            <button
              onClick={() => setIsAuthenticated(false)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-rose-500/20 hover:bg-rose-500/30 text-rose-200 text-xs font-semibold border border-rose-500/30 transition-all cursor-pointer"
            >
              <LogOut className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">Logout</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 py-6 space-y-6">
        {/* Status Alert */}
        {statusMsg && (
          <div
            className={cn(
              "p-4 rounded-xl text-sm font-semibold border flex items-center justify-between gap-3 shadow-lg",
              statusMsg.type === "success"
                ? "bg-emerald-950/80 border-emerald-500/40 text-emerald-200"
                : "bg-rose-950/80 border-rose-500/40 text-rose-200"
            )}
          >
            <div className="flex items-center gap-2">
              <Check className="h-4 w-4 shrink-0" />
              <span>{statusMsg.text}</span>
            </div>
            <button
              onClick={() => setStatusMsg(null)}
              className="text-xs underline cursor-pointer hover:opacity-80"
            >
              Dismiss
            </button>
          </div>
        )}

        {/* Navigation Tabs & Actions */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-white/15 pb-4">
          <div className="flex items-center gap-2 bg-white/5 p-1 rounded-2xl border border-white/10 w-full sm:w-auto">
            <button
              onClick={() => setActiveTab("pricing")}
              className={cn(
                "flex-1 sm:flex-none px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer",
                activeTab === "pricing"
                  ? "bg-[color:var(--accent-strong)] text-white shadow-md"
                  : "text-sky-200/70 hover:text-white hover:bg-white/10"
              )}
            >
              <DollarSign className="h-4 w-4" />
              <span>Fee Guide & Prices ({pricingList.length})</span>
            </button>

            <button
              onClick={() => setActiveTab("team")}
              className={cn(
                "flex-1 sm:flex-none px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer",
                activeTab === "team"
                  ? "bg-[color:var(--accent-strong)] text-white shadow-md"
                  : "text-sky-200/70 hover:text-white hover:bg-white/10"
              )}
            >
              <Users className="h-4 w-4" />
              <span>Clinical Team ({teamList.length})</span>
            </button>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            {activeTab === "pricing" && (
              <button
                onClick={addPricingItem}
                className="px-3.5 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs border border-white/15 transition-all flex items-center gap-1.5 cursor-pointer"
              >
                <Plus className="h-4 w-4 text-sky-300" />
                <span>Add Treatment</span>
              </button>
            )}

            <button
              onClick={activeTab === "pricing" ? savePricing : saveTeam}
              disabled={saving || uploading}
              className="px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs transition-all shadow-lg flex items-center gap-2 disabled:opacity-50 cursor-pointer ml-auto sm:ml-0"
            >
              {saving || uploading ? (
                <RefreshCw className="h-4 w-4 animate-spin" />
              ) : (
                <Save className="h-4 w-4" />
              )}
              <span>{saving ? "Publishing..." : uploading ? "Uploading Photo..." : "Save & Publish Live"}</span>
            </button>
          </div>
        </div>

        {/* ================= TAB 1: PRICING MANAGER ================= */}
        {activeTab === "pricing" && (
          <div className="space-y-4">
            <div className="grid gap-4 md:grid-cols-2">
              {pricingList.map((item, idx) => (
                <div
                  key={item.id || idx}
                  className="bg-[#0b3551] rounded-2xl p-5 border border-white/15 space-y-4 shadow-xl relative group"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex-1 space-y-1">
                      <label className="block text-[10px] font-bold uppercase tracking-wider text-sky-300">
                        Treatment Title
                      </label>
                      <input
                        type="text"
                        value={item.name}
                        onChange={(e) => updatePricingItem(idx, "name", e.target.value)}
                        className="w-full px-3 py-1.5 rounded-lg bg-white/10 border border-white/20 font-bold text-sm text-white focus:outline-none focus:border-sky-300"
                      />
                    </div>

                    <button
                      onClick={() => removePricingItem(idx)}
                      title="Delete Service"
                      className="p-2 rounded-lg bg-rose-500/20 hover:bg-rose-500 text-rose-300 hover:text-white transition-all border border-rose-500/30 cursor-pointer"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-wider text-sky-300 mb-1">
                        Starting Price Display
                      </label>
                      <input
                        type="text"
                        value={item.startingPrice}
                        onChange={(e) => updatePricingItem(idx, "startingPrice", e.target.value)}
                        className="w-full px-3 py-1.5 rounded-lg bg-white/10 border border-white/20 text-xs font-bold text-emerald-300 focus:outline-none focus:border-sky-300"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-bold uppercase tracking-wider text-sky-300 mb-1">
                        Category
                      </label>
                      <select
                        value={item.category}
                        onChange={(e) => updatePricingItem(idx, "category", e.target.value as any)}
                        className="w-full px-3 py-1.5 rounded-lg bg-[#071d2b] border border-white/20 text-xs text-white focus:outline-none focus:border-sky-300"
                      >
                        <option value="consultation">Consultation</option>
                        <option value="preventive">Preventive Care</option>
                        <option value="restorative">Restorative & Implants</option>
                        <option value="cosmetic">Cosmetic Dentistry</option>
                        <option value="orthodontics">Aligners & Braces</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-sky-300 mb-1">
                      Service Description
                    </label>
                    <textarea
                      rows={2}
                      value={item.description}
                      onChange={(e) => updatePricingItem(idx, "description", e.target.value)}
                      className="w-full px-3 py-1.5 rounded-lg bg-white/10 border border-white/20 text-xs text-white/90 focus:outline-none focus:border-sky-300 leading-relaxed"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-sky-300 mb-1">
                      Included Procedures (comma separated)
                    </label>
                    <input
                      type="text"
                      value={item.inclusions.join(", ")}
                      onChange={(e) =>
                        updatePricingItem(
                          idx,
                          "inclusions",
                          e.target.value.split(",").map((s) => s.trim())
                        )
                      }
                      className="w-full px-3 py-1.5 rounded-lg bg-white/10 border border-white/20 text-xs text-sky-100 focus:outline-none focus:border-sky-300"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ================= TAB 2: CLINICAL TEAM MANAGER ================= */}
        {activeTab === "team" && (
          <div className="space-y-6">
            {teamList.map((member, idx) => (
              <div
                key={member.id || idx}
                className="bg-[#0b3551] rounded-3xl p-6 border border-white/15 space-y-4 shadow-xl"
              >
                <div className="flex items-center gap-4 border-b border-white/15 pb-4">
                  <div className="h-16 w-16 rounded-full overflow-hidden border-2 border-sky-400 shrink-0 shadow-md">
                    <img src={member.image} alt={member.name} className="h-full w-full object-cover object-top" />
                  </div>

                  <div className="flex-1 min-w-0 space-y-1">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      <input
                        type="text"
                        value={member.name}
                        onChange={(e) => updateTeamItem(idx, "name", e.target.value)}
                        className="px-3 py-1.5 rounded-lg bg-white/10 border border-white/20 font-bold text-base text-white focus:outline-none focus:border-sky-300"
                      />
                      <input
                        type="text"
                        value={member.role}
                        onChange={(e) => updateTeamItem(idx, "role", e.target.value)}
                        className="px-3 py-1.5 rounded-lg bg-white/10 border border-white/20 font-medium text-xs text-sky-300 focus:outline-none focus:border-sky-300"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-sky-300 mb-1">
                      Clinical Qualifications / Degrees
                    </label>
                    <input
                      type="text"
                      value={member.title}
                      onChange={(e) => updateTeamItem(idx, "title", e.target.value)}
                      className="w-full px-3 py-1.5 rounded-lg bg-white/10 border border-white/20 text-xs text-white focus:outline-none focus:border-sky-300"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-bold uppercase tracking-wider text-sky-300 mb-1">
                      Doctor Photo Path / Image URL
                    </label>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={member.image}
                        onChange={(e) => updateTeamItem(idx, "image", e.target.value)}
                        className="w-full px-3 py-1.5 rounded-lg bg-white/10 border border-white/20 text-xs text-sky-200 focus:outline-none focus:border-sky-300 font-mono"
                      />
                      <label className="px-3.5 py-1.5 rounded-lg bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs flex items-center gap-1.5 shrink-0 cursor-pointer transition-all shadow-md">
                        <Upload className="h-3.5 w-3.5" />
                        <span>Upload</span>
                        <input
                          type="file"
                          accept="image/*"
                          className="hidden"
                          onChange={(e) =>
                            handleImageUpload(e, (url) => updateTeamItem(idx, "image", url))
                          }
                        />
                      </label>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-sky-300 mb-1">
                    Doctor Bio Summary
                  </label>
                  <textarea
                    rows={2}
                    value={member.bio}
                    onChange={(e) => updateTeamItem(idx, "bio", e.target.value)}
                    className="w-full px-3 py-1.5 rounded-lg bg-white/10 border border-white/20 text-xs text-white/90 focus:outline-none focus:border-sky-300 leading-relaxed"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-sky-300 mb-1">
                    Philosophy Quote
                  </label>
                  <input
                    type="text"
                    value={member.philosophy}
                    onChange={(e) => updateTeamItem(idx, "philosophy", e.target.value)}
                    className="w-full px-3 py-1.5 rounded-lg bg-white/10 border border-white/20 text-xs text-sky-100 italic focus:outline-none focus:border-sky-300"
                  />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
