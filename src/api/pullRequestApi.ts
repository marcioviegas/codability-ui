import axiosClient from "@/axiosClient";
import PullRequest from "@/modules/PullRequest";

const pullRequestApi = {
  pullRequest: async (
    projectId: string,
    pullRequestId: string
  ): Promise<PullRequest> => {
    return axiosClient.get(
      `/projects/${projectId}/pullrequests/${pullRequestId}`
    );
  },
  pullRequests: async (projectId: string): Promise<PullRequest[]> => {
    return axiosClient.get(`/projects/${projectId}/pullrequests`);
  }
};

export default pullRequestApi;
