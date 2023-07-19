import { redirect } from "next/navigation";
import Modal from "@/components/Modal";
import ProjectForm from "@/components/ProjectForm";
import { getCurrentUser } from "@/lib/session";
import React from "react";
import { getProjectDetails } from "@/lib/actions";
import { ProjectInterface } from "@/common.types";

const editProject = async ({ params: { id } }: { params: { id: string } }) => {
  const session = await getCurrentUser();

  if (!session?.user) return redirect("/");

  const result = (await getProjectDetails(id)) as {
    project?: ProjectInterface;
  };

  return (
    <Modal>
      <h3 className="modal-head-text">Edit project</h3>

      <ProjectForm type="edit" session={session} project={result?.project} />
    </Modal>
  );
};

export default editProject;
