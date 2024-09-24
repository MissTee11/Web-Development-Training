/*fetch("https://freetestapi.com/api/v1/students").then((student)=> 
{
    return student.json();
}).then((studentInfo)=>
{
    let tableInfo ="";
    studentInfo.map((values)=>
    {
        tableInfo += `<tr>
                    <td>${values.name}</td>
                     <td>${values.age}</td>
                      <td>${values.email}</td>
                       <td>${values.gender}</td>
                        <td>${values.address}</td>
                         <td>${values.phone}</td>
                          <td><img src="${values.image}"/></td>
                     </tr>`;
              
    });
    document.getElementById("table_body").innerHTML= tableInfo;
});*/

const studenturl = 'https://freetestapi.com/api/v1/students';

const studentoptions = {
    method: 'GET'
};

async function fetchData() {
    try {
        const response = await fetch(studenturl, studentoptions);
        const studentInfo = await response.json();

        let tableInfo = "";
        studentInfo.map((values) => {
            tableInfo += `<tr>
                            <td>${values.name}</td>
                            <td>${values.age}</td>
                            <td>${values.email}</td>
                            <td>${values.gender}</td>
                            <td>${values.address}</td>
                            <td>${values.phone}</td>
                            <td><img src="${values.image}" alt="student image"/></td>
                          </tr>`;
        });
        
        document.getElementById("table_body").innerHTML = tableInfo;
    } catch (error) {
        console.error('Error fetching student data:', error);
    }
}

fetchData();
