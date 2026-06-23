import CollegeSingle from './CollegeSingle'

function CollegeData(){

    const collegeData = [
        {
            name: "BUET",
            city: "Dhaka",
            website: "www.buet.edu.bd",
            students: [
                {
                    name: 'Student 1',
                    email: 'student1@gmail.com',
                    age: 21
                },
                {
                    name: 'Student 2',
                    email: 'student2@gmail.com',
                    age: 22
                },
                {
                    name: 'Student 3',
                    email: 'student3@gmail.com',
                    age: 23
                }
            ]
        },
        {
            name: "KUET",
            city: "Khulna",
            website: "www.kuet.edu.bd",
            students: [
                {
                    name: 'Student 11',
                    email: 'student11@gmail.com',
                    age: 24
                },
                {
                    name: 'Student 12',
                    email: 'student12@gmail.com',
                    age: 27
                },
                {
                    name: 'Student 13',
                    email: 'student13@gmail.com',
                    age: 20
                }
            ]
        },
        {
            name: "JUST",
            city: "Jessore",
            website: "www.just.edu.bd",
            students: [
                {
                    name: 'Student 21',
                    email: 'student21@gmail.com',
                    age: 21
                },
                {
                    name: 'Student 22',
                    email: 'student22@gmail.com',
                    age: 25
                },
                {
                    name: 'Student 23',
                    email: 'student23@gmail.com',
                    age: 29
                }
            ]
        },    
        {
            name: "RUET",
            city: "Rajshahi",
            website: "www.ruet.edu.bd",
            students: [
                {
                    name: 'Student 31',
                    email: 'student31@gmail.com',
                    age: 26
                },
                {
                    name: 'Student 32',
                    email: 'student32@gmail.com',
                    age: 24
                },
                {
                    name: 'Student 33',
                    email: 'student33@gmail.com',
                    age: 21
                }
            ]
        }
    ]

    return (
        <div>
            <h1>Nested looping with component</h1>
            {
                collegeData.map((college, index)=>(
                    <div  key={index}>
                        <CollegeSingle college={college}/>
                    </div>    
                ))
            }
        </div>
    )

}

export default CollegeData