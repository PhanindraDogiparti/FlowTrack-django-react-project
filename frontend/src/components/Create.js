// import {React, useEffect, useState} from 'react'
// import { Box } from '@mui/system'
// import { Button, Typography } from '@mui/material'
// import MyDatePickerFeild from './forms/MyDatePickerFeild'
// import MySelectFeild from './forms/MySelectFeild'
// import MyTextFeild from './forms/MyTextFeild'
// import MyMultilineFeild from './forms/MyMultilineFeild'
// import { useForm } from 'react-hook-form'
// import AxiosInstance from './Axios'
// import dayjs from 'dayjs'
// import {useNavigate} from 'react-router-dom'
// import { yupResolver } from "@hookform/resolvers/yup"
// import * as yup from "yup"

// const Create = () => {

//   const [projectmanager, setProjectmanager] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const hardcoded_options = [
//     {id:'', name:'None'},
//     {id:'open', name:'Open'},
//     {id:'In progress', name:'In progress'},
//     {id:'Completed', name:'Completed'},
//   ]

//   const GetData = () => {
//     AxiosInstance.get('projectmanager/').then((res) => {
//       setProjectmanager(res.data);
//       console.log(res.data);
//       setLoading(false);
//     });
//   };

//   useEffect(() => {
//     GetData();
//   }, []);





//   const navigate = useNavigate()

//   const defaultValues = {
//     name: '',
//     comments: '',
//     status: ''
//   }

//   const schema = yup
//   .object({
//     name: yup.string().required('Name is required'),
//     projectmanager: yup.string().required('Name is required'),
//     status: yup.string().required('Status is required'),
//     comments: yup.string().required('Comments is required'),
//     start_date: yup.date().required('Start date is required'),
//     end_date: yup.date().required('End date is required').min(yup.ref('start_date'),'The End date cannot be before the start date'),
//   })




//   const { handleSubmit, control } = useForm({defaultValues:defaultValues,resolver: yupResolver(schema)}); 
//   const submission = (data) => 
//     {
//       const startDate = dayjs(data.start_date["$d"]).format("YYYY-MM-DD")
//       const EndDate = dayjs(data.end_date["$d"]).format("YYYY-MM-DD")


//       AxiosInstance.post( `project/`,{
//         name: data.name,
//         projectmanager: data.projectmanager,
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
//       { loading ? <p>Loading Data......</p> :
      
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
//               options={hardcoded_options}
//             />

          
//             <MySelectFeild
//               label="Project Manager"
//               name="projectmanager"
//               control={control}
//               width={'30%'}
//               options={projectmanager}

//             />
             
           
//           </Box>
//           <Box sx={{ display: 'flex', justifyContent: 'start', marginTop: '40px' }}>
//               <Button variant="contained" type="submit" sx={{ width: '30%' }}>
//                   Submit
//               </Button>




//           </Box>
//         </Box>

//       </form> }
//     </div>
//   )
// }

// export default Create


import {React, useEffect, useState} from 'react' 
import { Box, Button, Typography } from '@mui/material'
import MyDatePickerFeild from './forms/MyDatePickerFeild'
import MyTextFeild from './forms/MyTextFeild'
import MySelectFeild from './forms/MySelectFeild'
import MyMultilineFeild from './forms/MyMultilineFeild'
import {useForm} from 'react-hook-form'
import AxiosInstance from './Axios'
import Dayjs from 'dayjs'
import {useNavigate} from 'react-router-dom'
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import MyMultiSelectFeild from './forms/MyMultiSelectFeild'

const Create = () => {

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
    });

    AxiosInstance.get(`employees/`).then((res) =>{
      setEmployees(res.data)
      console.log(res.data)
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

  const schema = yup
  .object({
    name: yup.string().required('Name is a required feild'),
    projectmanager: yup.string().required('Project manager is a required feild'),
    status: yup.string().required('Status is a required field'),
    employees: yup.array().min(1, 'Pick at least one option from the select feild'),
    comments: yup.string(), 
    start_date: yup.date().required('Start date is a required feild'), 
    end_date: yup.date().required('End date is a required feild').min(yup.ref('start_date'),'The end date can not be before the start date'), 
  })


  const {handleSubmit, control} = useForm({defaultValues:defaultValues, resolver: yupResolver(schema)})


    const submission = (data) => 
    {
      const StartDate = Dayjs(data.start_date["$d"]).format("YYYY-MM-DD")
      const EndDate = Dayjs(data.end_date["$d"]).format("YYYY-MM-DD")

      
      
      AxiosInstance.post( `project/`,{
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

          <Box sx={{display:'flex', justifyContent:'start', marginTop:'40px'}}> 
                <Button variant="contained" type="submit" sx={{width:'30%'}}>
                   Submit
                </Button>
          </Box>

      </Box>

      </form> }

  
    </div>
  )
}

export default Create