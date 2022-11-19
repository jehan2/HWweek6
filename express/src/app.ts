import  express  from "express";
import { People } from './People/People';
import { Grade } from "./Grade/Grade";
//import { v4 as uuidv4 } from 'uuid';
import morgan from 'morgan';
import { Task } from "./Task/Task";

 
const  app= express();

app.use(morgan('dev'));
// app.use(bodyParser.json())
// app.use(bodyParser.urlencoded({ extended: true })) 

// app.use((req,res,next) =>{

//      next();
// }
// );
app.use(express.json());
let peo: People[] = [
     {id: 1, name:'Jehan'},
     {id: 2, name:'Jalal'}
];
app.get("/name ", (req,res,next)=>{
     return res.json(peo);
})

app.post('/name ',(req,res)=>{
     let newPe = req.body as People;
     // {
     //      id: req.body.id,
     //      name: req.body.name
     // }
     peo.push(newPe);
     //newPe.id = uuidv4();
     return res.json(peo);
})

app.put('/name/:id', (req, res) => {
     let found =peo.find((i)=>{
          return i.id === parseInt(req.params.id)
     })
     if (found){
          let update = req.body as People;
          let targetIndex = peo.indexOf(found)
          peo.splice(targetIndex, 1, update)
          res.send(peo)
     }else{
          res.sendStatus(404)
     }
     //const updatPeo = req.body as People;
     //peo.push(updatPeo)
     //res.json(peo);
     
     //const { id } = req.params;
   
     // const updatPeList = peo.filter((pe) => {
     //   return pe.id !== id;
     // });
     // updatPeList.push(updatPe);

     // peo = updatPeList;
   
     // return res.json(peo);
   });

   app.delete('/name/:id', (req, res) => {
     let found =peo.find((i)=>{
          return i.id === parseInt(req.params.id)
     })
     if (found){
          let targetIndex = peo.indexOf(found)
          peo.splice(targetIndex, 1 )
          res.send(peo)
     }else{
          res.sendStatus(404)
     }
});


// #########################################

let grade: Grade[] = [
     {id: 1,  grade: '3.7'},
     {id: 2,  grade: '4'}
];


app.get("/grade", (req,res)=>{
     return res.json(grade);
})

app.post('/grade',(req,res)=>{
     let newgrade = req.body as Grade;

     grade.push(newgrade);
     //newPe.id = uuidv4();
     return res.json(grade);
})


app.put('/grade/:id', (req, res) => {
     let found =grade.find((i)=>{
          return i.id === parseInt(req.params.id)
     })
     if (found){
          let update = req.body as Grade;
          let targetIndex = grade.indexOf(found)
          grade.splice(targetIndex, 1, update)
          res.send(grade)
     }else{
          res.sendStatus(404)
     }
})

app.delete('/grade/:id', (req, res) => {
     let found =grade.find((i)=>{
          return i.id === parseInt(req.params.id)
     })
     if (found){
          let targetIndex = grade.indexOf(found)
          grade.splice(targetIndex, 1 )
          res.send(grade)
     }else{
          res.sendStatus(404)
     }
});

//##########################################

let task :Task[]=[

     {id:1,title:'web ', description:"web dddd", status:true},
     {id:2,title:'TS', description:"Typescript", status:true}
]

app.post('/task',(req,res)=>{
     let newtask = req.body as Task;

     task.push(newtask);
     return res.json(task);
})


app.get("/task", (req,res)=>{
     return res.json(task);
});


app.put('/task/:id', (req, res) => {
     let found =task.find((i)=>{
          return i.id === parseInt(req.params.id)
     })
     if (found){
          let update = req.body as Task;
          let targetIndex = task.indexOf(found)
          task.splice(targetIndex, 1, update)
          res.send(task)
     }else{
          res.sendStatus(404)
     }
})


app.delete('/task/:id', (req, res) => {
     let found =task.find((i)=>{
          return i.id === parseInt(req.params.id)
     })
     if (found){
          let targetIndex = task.indexOf(found)
          task.splice(targetIndex, 1 )
          res.send(task)
     }else{
          res.sendStatus(404)
     }
});



app.get ('/task/:title', (req,res)=>{ 
    let t = req.body as Task;
     let taskTitle = req.params
     // console.log(taskTitle)
     const target1 = task.filter((i) => {
          return i.title.indexOf("search text") > -1;})
          return res.json(taskTitle);

})

const PORT =5000;
app.listen(PORT, ()=>{
     console.log(`server listeng on port ${PORT}`)
});