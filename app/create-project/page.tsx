import { redirect } from "next/navigation";
import Modal from "@/components/Modal";
import ProjectForm from "@/components/ProjectForm";
import { getCurrentUser } from "@/lib/session";
import React from "react";

const createProject = async () => {
  const session = await getCurrentUser();

  if (!session?.user) return redirect("/");

  return (
    <Modal>
      <h3 className="modal-head-text">Create a new project</h3>

      <ProjectForm type="create" session={session} />
    </Modal>
  );
};

export default createProject;
