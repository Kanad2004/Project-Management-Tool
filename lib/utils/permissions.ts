import type { WorkspaceRole } from "@/types";

export function canManageMembers(role: WorkspaceRole): boolean {
  return role === "OWNER" || role === "ADMIN";
}

export function canDeleteWorkspace(role: WorkspaceRole): boolean {
  return role === "OWNER";
}

export function canCreateProject(role: WorkspaceRole): boolean {
  return role === "OWNER" || role === "ADMIN" || role === "MEMBER";
}

export function canManageWorkspaceSettings(role: WorkspaceRole): boolean {
  return role === "OWNER" || role === "ADMIN";
}
