const chats = [
    {
        id: 1,
        name: "Raushan kumar",
        lastMessage: "Let’s finalize the report today.",
        time: "10:30 AM",
        messages: [
            { sender: "Alice", text: "Hey, how’s the report?", time: "10:00 AM" },
            { sender: "You", text: "Almost done, will share soon.", time: "10:05 AM" },
            { sender: "Alice", text: "Cool, thanks!", time: "10:30 AM" }
        ]
    },
    {
        id: 2,
        name: "Dev Team",
        lastMessage: "Can we deploy by evening?",
        time: "Yesterday",
        messages: [
            { sender: "Dev", text: "Bug fix ready!", time: "5:00 PM" },
            { sender: "You", text: "Testing now!", time: "5:15 PM" }
        ]
    },
    {
        id: 3,
        name: "Marketing Team",
        lastMessage: "Campaign launch scheduled for Friday!",
        time: "Yesterday",
        messages: [
            { sender: "Marketing", text: "We finalized creatives.", time: "2:00 PM" },
            { sender: "You", text: "Perfect, let’s roll!", time: "2:30 PM" }
        ]
    },
    {
        id: 4,
        name: "Pragya Astha",
        lastMessage: "Catch up later?",
        time: "9:00 AM",
        messages: [
            { sender: "John", text: "Hey, available later?", time: "8:30 AM" },
            { sender: "You", text: "Sure, after lunch!", time: "8:45 AM" }
        ]
    },
    {
        id: 5,
        name: "Design Team",
        lastMessage: "UI mockups shared.",
        time: "Monday",
        messages: [
            { sender: "Design", text: "Shared updated mockups.", time: "3:00 PM" },
            { sender: "You", text: "Looks great!", time: "3:30 PM" }
        ]
    },
    {
        id: 6,
        name: "Project Manager",
        lastMessage: "Standup meeting at 11 AM.",
        time: "Today",
        messages: [
            { sender: "PM", text: "Daily standup today at 11.", time: "9:00 AM" },
            { sender: "You", text: "Got it, see you there.", time: "9:10 AM" }
        ]
    },
    {
        id: 7,
        name: "QA Team",
        lastMessage: "Found a critical bug.",
        time: "Yesterday",
        messages: [
            { sender: "QA", text: "Critical bug in checkout flow.", time: "4:00 PM" },
            { sender: "You", text: "On it!", time: "4:15 PM" }
        ]
    },
    {
        id: 8,
        name: "Finance",
        lastMessage: "Budget approved.",
        time: "Tuesday",
        messages: [
            { sender: "Finance", text: "Budget has been approved.", time: "11:00 AM" },
            { sender: "You", text: "Great news!", time: "11:15 AM" }
        ]
    },
    {
        id: 9,
        name: "Support Team",
        lastMessage: "Customer issue resolved.",
        time: "Today",
        messages: [
            { sender: "Support", text: "Issue #123 fixed.", time: "1:00 PM" },
            { sender: "You", text: "Thanks for the quick turnaround!", time: "1:10 PM" }
        ]
    },
    {
        id: 10,
        name: "HR",
        lastMessage: "Reminder: Submit timesheets.",
        time: "Today",
        messages: [
            { sender: "HR", text: "Timesheets due by EOD.", time: "10:00 AM" },
            { sender: "You", text: "Submitting shortly.", time: "10:15 AM" }
        ]
    }
];

export default chats;
