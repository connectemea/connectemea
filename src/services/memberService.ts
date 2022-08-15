import BackendService from "../lib/BackendService";
export const getMembers = () => {
    const path = "?maxRecords=3&view=Grid%20view";
    return BackendService.get(path);
}
export const getMember = (id: string) => {
    const path = `/${id}`;
    return BackendService.get(path);
}
export const createMember = (data: { name: string }) => {
    const path = "";
    return BackendService.post(path, data);

}