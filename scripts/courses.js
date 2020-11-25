// courseList = {  
//                 class1 : {code: 'ACIT 1620',  name: 'Fundamental Web Technologies'}, 
//                 class2 : {code: 'ACIT 1515',  name: 'Scripting for IT'}, 
//                 class3 : {code: 'ACIT 1420',  name: 'Introduction to Systems Administration'}
//             }

function createCourseArray() {
    let classnum = 1
    var element = document.getElementsByTagName("a");
    courseList = {}
    for (let i = 0; i < element.length; i += 1) {
        if (element[i].innerHTML.includes("ACIT") || element[i].innerHTML.includes("COMM") || element[i].innerHTML.includes("MATH") || element[i].innerHTML.includes("ORGB")) {
            courseList['class'+classnum] = {code: element[i].innerHTML, date: "Fall 2020"}
            classnum += 1
        }
      }
      return courseList, classnum
}

function findCourse(courselist, classnum){
    do { 
        var x = prompt("Input course code:");
    }
    while(
        (isNaN(Number(x)) || x.length != 4)
        );

    let create = true
    for (i in courselist) {
        for (a in courselist[i]) {
            if (courselist[i][a].includes(String(x))) {
                var classitem = document.getElementsByClassName('c'+String(x))
                classitem[0].style.backgroundColor = "green"
                classitem[0].style.color = "white"
                classitem[1].style.backgroundColor = "green"
                classitem[1].style.color = "white"
                // console.log("Yes I am taking the course: "+courselist[i]['code'])
                create = false
            }
        }
    }

    if (create == true){
        courseList['class'+classnum] = {code: String(x), date: null}
        console.log("Successfully added class "+courseList['class'+classnum]['code'])
        var addGrid = document.createElement("div")
        addGrid.id = "fork"
        document.getElementById("append").appendChild(addGrid)
        var addGrid1 = document.createElement("a")
        addGrid1.innerHTML = x
        addGrid1.href = 'https://www.bcit.ca'
        document.getElementById("fork").appendChild(addGrid1)
        var addGrid2 = document.createElement("p")
        addGrid2.innerHTML = "Fall 2020"
        document.getElementById("fork").appendChild(addGrid2)
        var addGrid3 = document.createElement("div")
        addGrid3.id = 'spoon'
        document.getElementById("append").appendChild(addGrid3)
        var addGrid4 = document.createElement("p")
        addGrid4.innerHTML = "N/A"
        document.getElementById("spoon").appendChild(addGrid4)
    }
}
let courselist, classnum = createCourseArray()
findCourse(courseList, classnum)