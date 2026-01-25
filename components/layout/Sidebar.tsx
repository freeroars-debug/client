"use client";

import { UserButton } from "@clerk/nextjs";
import { Plus, Briefcase, PanelLeftClose, PanelLeftOpen } from "lucide-react";
import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";

export function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const router = useRouter();
  const pathname = usePathname();

  const handleProjectsClick = () => {
    router.push("/projects");
  };

  const handleNewProject = () => {
    router.push("/projects");
  };

  return (
    <div
      className={`flex flex-col border-r border-white/10 bg-gradient-to-b from-[#0f172a] to-[#020617] text-slate-200 transition-all duration-300 ease-in-out ${
        isCollapsed ? "w-16" : "w-64"
      }`}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-3 py-4">
        {!isCollapsed && (
          <h1 className="text-sm font-semibold tracking-wide text-slate-100">
            open CANVAS
          </h1>
        )}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="rounded-md p-2 hover:bg-white/5 transition-colors"
        >
          {isCollapsed ? (
            <PanelLeftOpen size={16} className="text-slate-400" />
          ) : (
            <PanelLeftClose size={16} className="text-slate-400" />
          )}
        </button>
      </div>

      {/* New Project Button */}
      <div className="px-3 pb-4">
        <button
          onClick={handleNewProject}
          className={`flex w-full items-center gap-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors ${
            isCollapsed ? "justify-center p-3" : "px-3 py-2.5"
          }`}
        >
          <Plus size={16} className="text-slate-300" />
          {!isCollapsed && (
            <span className="text-sm font-medium text-slate-100">
              New project
            </span>
          )}
        </button>
      </div>

      {/* Navigation */}
      {!isCollapsed && (
        <div className="px-3 pb-3">
          <nav className="space-y-1">
            <button
              onClick={handleProjectsClick}
              className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 text-sm transition-colors ${
                pathname === "/projects"
                  ? "bg-white/10 text-white"
                  : "text-slate-400 hover:bg-white/5 hover:text-slate-200"
              }`}
            >
              <Briefcase size={16} />
              <span>Projects</span>
            </button>
          </nav>
        </div>
      )}

      {/* Spacer */}
      <div className="flex-1" />

      {/* User Section */}
      <div className="border-t border-white/10 px-3 py-4">
        <div
          className={`flex items-center ${
            isCollapsed ? "justify-center" : "gap-3"
          }`}
        >
          <UserButton />
          {!isCollapsed && (
            <span className="text-sm text-slate-400">Profile</span>
          )}
        </div>
      </div>
    </div>
  );
}
