import BackendService from "../lib/BackendService";
export const getMembers = () => {
    const path = "";
    return BackendService.get(path);
}
export const getMember = (id: string) => {
    const path = `/${id}`;
    return BackendService.get(path);
}
export const createMember = (data: { name: string }) => {
    const path = "";
    const dataObj = {
        records:[
            {
                fields:data
            }
        ]
    }
    return BackendService.post(path, dataObj);
}