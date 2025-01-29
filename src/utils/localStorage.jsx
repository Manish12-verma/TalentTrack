const employees = [
    {
      ID: 1,
      email: "employee1@example.com",
      password: "123",
      tasks: [
        {
          title: "Prepare Monthly Report",
          description: "Create the financial report for the month.",
          date: "2025-02-05",
          category: "Finance",
          assignedTo: "employee1@example.com",
          active: true,
          newTask: true,
          completed: false,
          failed: false
        },
        {
          title: "Client Meeting",
          description: "Discuss project deliverables with the client.",
          date: "2025-02-07",
          category: "Meeting",
          assignedTo: "employee1@example.com",
          active: false,
          newTask: false,
          completed: true,
          failed: false
        }
      ]
    },
    {
      ID: 2,
      email: "employee2@example.com",
      password: "123",
      tasks: [
        {
          title: "Code Review",
          description: "Review the codebase for the new feature implementation.",
          date: "2025-02-03",
          category: "Development",
          assignedTo: "employee2@example.com",
          active: true,
          newTask: true,
          completed: false,
          failed: false
        },
        {
          title: "Bug Fixing",
          description: "Fix critical bugs reported by QA.",
          date: "2025-02-04",
          category: "Development",
          assignedTo: "employee2@example.com",
          active: false,
          newTask: false,
          completed: true,
          failed: false
        },
        {
          title: "Team Training",
          description: "Conduct training for new team members.",
          date: "2025-02-08",
          category: "Training",
          assignedTo: "employee2@example.com",
          active: true,
          newTask: true,
          completed: false,
          failed: false
        }
      ]
    },
    {
      ID: 3,
      email: "employee3@example.com",
      password: "123",
      tasks: [
        {
          title: "Market Research",
          description: "Analyze trends and competitors in the market.",
          date: "2025-02-06",
          category: "Research",
          assignedTo: "employee3@example.com",
          active: true,
          newTask: true,
          completed: false,
          failed: false
        },
        {
          title: "Social Media Campaign",
          description: "Design and launch a campaign for the new product.",
          date: "2025-02-10",
          category: "Marketing",
          assignedTo: "employee3@example.com",
          active: false,
          newTask: false,
          completed: false,
          failed: true
        }
      ]
    },
    {
      ID: 4,
      email: "employee4@example.com",
      password: "123",
      tasks: [
        {
          title: "Server Maintenance",
          description: "Perform scheduled server updates.",
          date: "2025-02-02",
          category: "IT",
          assignedTo: "employee4@example.com",
          active: true,
          newTask: false,
          completed: false,
          failed: true
        },
        {
          title: "System Backup",
          description: "Ensure all systems are backed up.",
          date: "2025-02-07",
          category: "IT",
          assignedTo: "employee4@example.com",
          active: false,
          newTask: false,
          completed: true,
          failed: false
        }
      ]
    },
    {
      ID: 5,
      email: "employee5@example.com",
      password: "123",
      tasks: [
        {
          title: "Policy Updates",
          description: "Review and update company policies.",
          date: "2025-02-05",
          category: "HR",
          assignedTo: "employee5@example.com",
          active: true,
          newTask: true,
          completed: false,
          failed: false
        },
        {
          title: "Employee Feedback",
          description: "Collect feedback from employees.",
          date: "2025-02-09",
          category: "HR",
          assignedTo: "employee5@example.com",
          active: false,
          newTask: true,
          completed: false,
          failed: true
        }
      ]
    }
  ];
  
  const admin = [
    {
      ID: 101,
      email: "admin@example.com",
      password: "123"
    }
  ];
  

  export const  setLocalStorage =()=>{
      localStorage.setItem('employees',JSON.stringify(employees))
      localStorage.setItem('admin',JSON.stringify(admin))
  }

  export const getLocalStorage=()=>{
        const employees =   JSON.parse(localStorage.getItem('employees'))
        const admin =   JSON.parse(localStorage.getItem('admin'))

       console.log(employees,admin)
  }