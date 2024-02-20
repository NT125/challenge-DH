export async function getApplicants() {
    try {
        const response = await fetch("http://localhost:8000/api/applicants/", {method: "GET"});
        const data = await response.json();

        if (response.status !== 200){
            throw new Error("Hubo un problema al establecer la conexión");
        }

        return data
        
    } catch (error) {
        console.log(error);
    }
}