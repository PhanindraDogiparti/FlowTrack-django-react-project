// import {React,useEffect} from 'react'
// import { Box } from '@mui/system'
// import { Button, Typography } from '@mui/material'
// import MyDatePickerFeild from './forms/MyDatePickerFeild'
// import MySelectFeild from './forms/MySelectFeild'
// import MyTextFeild from './forms/MyTextFeild'
// import MyMultilineFeild from './forms/MyMultilineFeild'
// import { useForm } from 'react-hook-form'
// import AxiosInstance from './Axios'
// import dayjs from 'dayjs'
// import {useNavigate, useParams} from 'react-router-dom'

// const Edit = () => {
//   const MyParam = useParams()
//   const MyId = MyParam.id

//   const GetData = () => {
//     AxiosInstance.get(`project/${MyId}`).then((res) => {
//       console.log(res.data)
//       setValue('name', res.data.name)
//       setValue('status', res.data.status)
//       setValue('comments', res.data.comments)
//       setValue('start_date', dayjs(res.data.start_date))
//       setValue('end_date', dayjs(res.data.end_date))
//     })
//   }[]

//   useEffect(() => {
//     GetData();
//   },[]);



//   const navigate = useNavigate()

//   const defaultValues = {
//     name: '',
//     comments: '',
//     status: '',
//     start_date: '',
//     end_date: ''
//   }
//   const { handleSubmit, setValue, control } = useForm({defaultValues:defaultValues}); 
//   const submission = (data) => 
//     {
//       const startDate = dayjs(data.start_date["$d"]).format("YYYY-MM-DD")
//       const EndDate = dayjs(data.end_date["$d"]).format("YYYY-MM-DD")


//       AxiosInstance.put( `project/${MyId}/`,{
//         name: data.name,
//         projectmanager: data.projectmanager,
//         employees: data.employees,
//         status: data.status,
//         comments: data.comments, 
//         start_date: startDate, 
//         end_date: EndDate,
      

//     })
    
//     .then((res) =>{
//       navigate('/')



//     })




//   }

//   return (
//     <div>
      
//       <form onSubmit={handleSubmit(submission)}> 

//         <Box sx={{ display: 'flex', width: '100%', backgroundColor: '#00003f', marginBottom: '10px' }}>
//           <Typography sx={{ marginLeft: '20px', color: '#fff' }}>
//             Create Records
//           </Typography>
//         </Box>

//         <Box sx={{ display: 'flex', width: '100%', boxShadow: 3, padding: 4, flexDirection: 'column' }}>
//           <Box sx={{ display: 'flex', justifyContent: 'space-around', marginBottom: '40px' }}>
//             <MyTextFeild
//               label="Name"
//               name="name"
//               control={control} 
//               placeholder="Provide a project name"
//               width={'30%'}
//             />

//             <MyDatePickerFeild
//               label="Start date"
//               name="start_date"
//               control={control}
//               width={'30%'}
//             />

//             <MyDatePickerFeild
//               label="End date"
//               name="end_date"
//               control={control}
//               width={'30%'}
//             />
//           </Box>

//           <Box sx={{ display: 'flex', justifyContent: 'space-around', marginBottom: '40px' }}>
//             <MyMultilineFeild
//               label="Comments"
//               name="comments"
//               control={control}
//               placeholder="Provide project comments"
//               width={'30%'}
//             />

//             <MySelectFeild
//               label="Status"
//               name="status"
//               control={control}
//               width={'30%'}
//             />

//             <Box sx={{ width: '30%' }}>
//               <Button variant="contained" type="submit" sx={{ width: '100%' }}>
//                 Submit
//               </Button>
//             </Box>
//           </Box>
//         </Box>

//       </form>
//     </div>
//   )
// }

// export default Edit




// import { React, useEffect, useCallback } from "react";
// import { Box } from "@mui/system";
// import { Button, Typography } from "@mui/material";
// import MyDatePickerFeild from "./forms/MyDatePickerFeild";
// import MySelectFeild from "./forms/MySelectFeild";
// import MyTextFeild from "./forms/MyTextFeild";
// import MyMultilineFeild from "./forms/MyMultilineFeild";
// import { useForm } from "react-hook-form";
// import AxiosInstance from "./Axios";
// import dayjs from "dayjs";
// import { useNavigate, useParams } from "react-router-dom";

// const Edit = () => {
//   const MyParam = useParams();
//   const MyId = MyParam.id;

//   const [projectmanager, setProjectmanager] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const hardcoded_options = [
//     {id:'', name:'None'},
//     {id:'open', name:'Open'},
//     {id:'In progress', name:'In progress'},
//     {id:'Completed', name:'Completed'},
//   ]

//   const GetData = () => {
//     AxiosInstance.get(`projectmanager/`).then((res) =>{
//       setProjectmanager(res.data)
//       console.log(res.data)

//     })

//   const { handleSubmit, setValue, control } = useForm({
//     defaultValues: {
//       name: "",
//       comments: "",
//       status: "",
//       start_date: "",
//       end_date: "",
//     },
//   });

  
//   const GetData = useCallback(() => {
//     AxiosInstance.get(`project/${MyId}`).then((res) => {
//       console.log(res.data);
//       setValue("name", res.data.name);
//       setValue("status", res.data.status);
//       setValue("comments", res.data.comments);
//       setValue("start_date", dayjs(res.data.start_date));
//       setValue("end_date", dayjs(res.data.end_date));
//     });
//   }, [MyId, setValue]); 

//   useEffect(() => {
//     GetData();
//   }, [GetData]);

//   const navigate = useNavigate();

//   const submission = (data) => {
//     const startDate = dayjs(data.start_date["$d"]).format("YYYY-MM-DD");
//     const endDate = dayjs(data.end_date["$d"]).format("YYYY-MM-DD");

//     AxiosInstance.put(`project/${MyId}/`, {
//       name: data.name,
//       projectmanager: data.projectmanager,
//       employees: data.employees,
//       status: data.status,
//       comments: data.comments,
//       start_date: startDate,
//       end_date: endDate,
//     }).then(() => {
//       navigate("/");
//     });
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit(submission)}>
//         <Box sx={{ display: "flex", width: "100%", backgroundColor: "#00003f", marginBottom: "10px" }}>
//           <Typography sx={{ marginLeft: "20px", color: "#fff" }}>Create Records</Typography>
//         </Box>

//         <Box sx={{ display: "flex", width: "100%", boxShadow: 3, padding: 4, flexDirection: "column" }}>
//           <Box sx={{ display: "flex", justifyContent: "space-around", marginBottom: "40px" }}>
//             <MyTextFeild label="Name" name="name" control={control} placeholder="Provide a project name" width={"30%"} />

//             <MyDatePickerFeild label="Start date" name="start_date" control={control} width={"30%"} />

//             <MyDatePickerFeild label="End date" name="end_date" control={control} width={"30%"} />
//           </Box>

//           <Box sx={{ display: "flex", justifyContent: "space-around", marginBottom: "40px" }}>
//             <MyMultilineFeild label="Comments" name="comments" control={control} placeholder="Provide project comments" width={"30%"} />

//             <MySelectFeild label="Status" name="status" control={control} width={"30%"} />

//             <Box sx={{ width: "30%" }}>
//               <Button variant="contained" type="submit" sx={{ width: "100%" }}>
//                 Submit
//               </Button>
//             </Box>
//           </Box>
//         </Box>
//       </form>
//     </div>
//   );
// };

// export default Edit;


// import { React, useEffect, useCallback,useState } from "react";
// import { Box } from "@mui/system";
// import { Button, Typography } from "@mui/material";
// import MyDatePickerFeild from "./forms/MyDatePickerFeild";
// import MySelectFeild from "./forms/MySelectFeild";
// import MyTextFeild from "./forms/MyTextFeild";
// import MyMultilineFeild from "./forms/MyMultilineFeild";
// import { useForm } from "react-hook-form";
// import AxiosInstance from "./Axios";
// import Dayjs from "dayjs";
// import { useNavigate, useParams } from "react-router-dom";

// const Edit = () => {
//   const MyParam = useParams();
//   const MyId = MyParam.id;

//   const [projectmanager, setProjectmanager] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const hardcoded_options = [
//     {id:'', name:'None'},
//     {id:'open', name:'Open'},
//     {id:'In progress', name:'In progress'},
//     {id:'Completed', name:'Completed'},
//   ]

 

//   const { handleSubmit, setValue, control } = useForm({
//     defaultValues: {
//       name: "",
//       comments: "",
//       status: "",
//       start_date: "",
//       end_date: "",
//     },
//   });

  
//   const GetData = useCallback(() => {

//     AxiosInstance.get('projectmanager/').then((res) => {
//       setProjectmanager(res.data);
//       console.log(res.data);

//     });

//     AxiosInstance.get(`project/${MyId}`).then((res) => {
//       console.log(res.data);
//       setValue("name", res.data.name);
//       setValue("status", res.data.status);
//       setValue("projectmanager", res.data.projectmanager);
//       setValue("comments", res.data.comments);
//       setValue("start_date", Dayjs(res.data.start_date));
//       setValue("end_date", Dayjs(res.data.end_date));
//       setLoading(false);
//     });
//   }, [MyId, setValue]); 

//   useEffect(() => {
//     GetData();
//   }, [GetData]);

//   const navigate = useNavigate();

//   const submission = (data) => {
//     const startDate = Dayjs(data.start_date["$d"]).format("YYYY-MM-DD");
//     const endDate = Dayjs(data.end_date["$d"]).format("YYYY-MM-DD");

//     AxiosInstance.put(`project/${MyId}/`, {
//       name: data.name,
//       projectmanager: data.projectmanager,
//       // employees: data.employees,
//       status: data.status,
//       comments: data.comments,
//       start_date: startDate,
//       end_date: endDate,
//     }).then(() => {
//       navigate("/");
//     });
//   };

//   return (
//     <div>
//       { loading ? <p>Loading Data......</p> :
//       <form onSubmit={handleSubmit(submission)}>
//         <Box sx={{ display: "flex", width: "100%", backgroundColor: "#00003f", marginBottom: "10px" }}>
//           <Typography sx={{ marginLeft: "20px", color: "#fff" }}>Create Records</Typography>
//         </Box>

//         <Box sx={{ display: "flex", width: "100%", boxShadow: 3, padding: 4, flexDirection: "column" }}>
//           <Box sx={{ display: "flex", justifyContent: "space-around", marginBottom: "40px" }}>
//             <MyTextFeild label="Name" name="name" control={control} placeholder="Provide a project name" width={"30%"} />

//             <MyDatePickerFeild label="Start date" name="start_date" control={control} width={"30%"} />

//             <MyDatePickerFeild label="End date" name="end_date" control={control} width={"30%"} />
//           </Box>

//           <Box sx={{ display: "flex", justifyContent: "space-around", marginBottom: "40px" }}>
//             <MyMultilineFeild label="Comments" name="comments" control={control} placeholder="Provide project comments" width={"30%"} />

//             <MySelectFeild label="Status" name="status" control={control} width={"30%"} options = {hardcoded_options} />

//             <MySelectFeild label="Project manager" name="projectmanager" control={control} width={"30%"} options = {projectmanager} />


//             <Box sx={{ width: "30%" }}>
              
//             </Box>
//             <Box sx={{ display: "flex", justifyContent: "space-around", marginTop: "40px" }}>
//                 <Button variant="contained" type="submit" sx={{ width: "100%" }}>
//                   Submit
//                 </Button>
//             </Box>
//           </Box>
//         </Box>
//       </form>}
//     </div>
//   );
// };

// export default Edit;




import {React, useEffect, useState} from 'react' 
import { Box, Button, Typography } from '@mui/material'
import MyDatePickerFeild from './forms/MyDatePickerFeild'
import MyTextFeild from './forms/MyTextFeild'
import MySelectFeild from './forms/MySelectFeild'
import MyMultilineFeild from './forms/MyMultilineFeild'
import {useForm} from 'react-hook-form'
import AxiosInstance from './Axios'
import Dayjs from 'dayjs'
import {useNavigate, useParams} from 'react-router-dom'
import MyMultiSelectFeild from './forms/MyMultiSelectFeild'

const Edit = () => {
  const MyParam = useParams()
  const MyId = MyParam.id


  const [projectmanager,setProjectmanager] = useState()
  const [employees,setEmployees] = useState()
  const [loading,setLoading] = useState(true)

  const hardcoded_options = [
    {id:'', name:'None'}, 
    {id:'Open', name:'Open'}, 
    {id:'In progress', name:'In progress'}, 
    {id:'Completed', name:'Completed'}, 
  ]


  const GetData = () => {
    AxiosInstance.get(`projectmanager/`).then((res) =>{
      setProjectmanager(res.data)
      console.log(res.data)

    })

    AxiosInstance.get(`employees/`).then((res) =>{
      setEmployees(res.data)
      console.log(res.data)
    })

    AxiosInstance.get(`project/${MyId}`).then((res) =>{
      console.log(res.data)
      setValue('name',res.data.name)
      setValue('status',res.data.status)
      setValue('employees',res.data.employees)
      setValue('projectmanager',res.data.projectmanager)
      setValue('comments',res.data.comments)
      setValue('start_date',Dayjs(res.data.start_date))
      setValue('end_date',Dayjs(res.data.end_date))
      setLoading(false)
    })

  }

  useEffect(() => {
    GetData();
  },[] )

  const navigate = useNavigate()
  const defaultValues = {
    name : '', 
    comments: '', 
    status: '', 
    
  }

  const {handleSubmit, setValue, control} = useForm({defaultValues:defaultValues})
  const submission = (data) => 
    {
      const StartDate = Dayjs(data.start_date["$d"]).format("YYYY-MM-DD")
      const EndDate = Dayjs(data.end_date["$d"]).format("YYYY-MM-DD")
      
      AxiosInstance.put( `project/${MyId}/`,{
        name: data.name,
        projectmanager: data.projectmanager,
        employees: data.employees,
        status: data.status,
        comments: data.comments, 
        start_date: StartDate, 
        end_date: EndDate,

      })

      .then((res) =>{
        navigate(`/`)
      })


    }
  
  return (
    <div>
      { loading ? <p>Loading data...</p> :
      <form onSubmit={handleSubmit(submission)}>

      <Box sx={{display:'flex', justifyContent:'space-between',width:'100%', backgroundColor:'#00003f', marginBottom:'10px'}}>
         <Typography sx={{marginLeft:'20px', color:'#fff'}}>
            Create records
         </Typography>

      </Box>

      <Box sx={{display:'flex', width:'100%', boxShadow:3, padding:4, flexDirection:'column'}}>

          <Box sx={{display:'flex', justifyContent:'space-around', marginBottom:'40px'}}> 
              <MyTextFeild
                label="Name"
                name={"name"}
                control={control}
                placeholder="Provide a project name"
                width={'30%'}
              />

              <MyDatePickerFeild
                label="Start date"
                name="start_date"
                control={control}
                width={'30%'}
              />

              <MyDatePickerFeild
                label="End date"
                name="end_date"
                control={control}
                width={'30%'}
              />

          </Box>

          <Box sx={{display:'flex', justifyContent:'space-around'}}> 
              <MyMultilineFeild
                label="Comments"
                name="comments"
                control={control}
                placeholder="Provide project comments"
                width={'30%'}
              />

              <MySelectFeild
                label="Status"
                name="status"
                control={control}
                width={'30%'}
                options = {hardcoded_options}
              />

              <MySelectFeild
                label="Project manager"
                name="projectmanager"
                control={control}
                width={'30%'}
                options = {projectmanager}
              />

                

          </Box>

          <Box sx={{display:'flex', justifyContent:'space-around', marginTop: '40px'}}> 

              <MyMultiSelectFeild
                  label="Employees"
                  name="employees"
                  control={control}
                  width={'30%'}
                  options = {employees}
              />

          </Box>

          <Box sx={{display:'flex', justifyContent:'space-around', marginTop:'40px'}}> 
                <Button variant="contained" type="submit" sx={{width:'30%'}}>
                   Submit
                </Button>
          </Box>

          
      </Box>

      </form>
    }
    </div>
  )
}

export default Edit


