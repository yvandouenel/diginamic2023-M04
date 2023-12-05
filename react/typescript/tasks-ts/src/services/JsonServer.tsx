import TaskInterface from "../interfaces/TaskInterface";

export default class JsonServer {
    private _url = "http://localhost:3001/tasks";
    private static _instance: JsonServer | null = null;

    private constructor() {
    }
    public static getSingleInstance() {
        if (JsonServer._instance === null) {
            JsonServer._instance = new JsonServer();
        }
        return JsonServer._instance;
    }
    
    async loadTasks(): Promise<TaskInterface[]> {
        return fetch(this._url)
            .then((response) => {
                console.log("statut de la réponse :", response.status);
                return response.json();
            })
            .then((tasks) => tasks);
    }

    async deleteRemoteTask(task_id: number): Promise<void> {
        return fetch(`${this._url}/${task_id}`, {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            method: "DELETE",
        }).then((res) => {
            console.log(res);
        });
    }

    async addRemoteTask(
        task: Omit<TaskInterface, "id">
    ): Promise<TaskInterface> {
        return fetch(`${this._url}`, {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            method: "POST",

            body: JSON.stringify(task),
        })
            .then((res) => {
                console.log(res);
                return res.json();
            })
            .then((res) => {
                return res;
            });
    }

    async patchRemoteTaskDone(
        task_id: number,
        done: boolean
    ): Promise<TaskInterface> {
        return fetch(`${this._url}/${task_id}`, {
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            method: "PATCH",

            body: `{"done" : ${done}}`,
        })
            .then((res) => {
                console.log(res);
                return res.json();
            })
            .then((res) => {
                return res;
            });
    }
}
