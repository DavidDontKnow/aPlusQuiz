const practiceQuestionsB = [
    {
        "question": "A server administrator has four identical drives to install into a database server. Which of these RAID types would provide both redundancy and the most available storage space?",
        "choices": {
            "A": "RAID 5",
            "B": "RAID 10",
            "C": "RAID 0",
            "D": "RAID 1"
        },
        "answer": "A",
        "reason": "With RAID 5, three drives would contain user data and the fourth drive would store parity information. This efficient use of space and the included redundancy make RAID 5 the best option."
    },
    {
        "question": "A user is attempting to charge their iPhone, but the charging icon does not appear when connecting the charging cable. A working cable from another iPhone exhibits the same symptoms. Which of the following is the MOST likely reason for this issue?",
        "choices": {
            "A": "The screen is locked",
            "B": "An iOS update is pending",
            "C": "The iPhone has low signal",
            "D": "The Lightning port is damaged"
        },
        "answer": "D",
        "reason": "A damaged Lightning interface would prevent the phone from charging, even while attempting to charge with different cables."
    },
    {
        "question": "A user in the marketing department needs an LCD with the best possible color representation. Which of the following would be the BEST choice for this requirement?",
        "choices": {
            "A": "TN",
            "B": "CCFL",
            "C": "IPS",
            "D": "VA"
        },
        "answer": "C",
        "reason": "An IPS (In Plane Switching) display provides excellent color representation and would be the best choice of the available options."
    },
    {
        "question": "A company is receiving an increase in malware delivered to random employees through email attachments. Which of the following would be the BEST way to protect users against this malicious software?",
        "choices": {
            "A": "Spam gateway",
            "B": "DHCP services",
            "C": "Syslog",
            "D": "VLANs"
        },
        "answer": "A",
        "reason": "A spam gateway acts as a filter for unauthorized or unsolicited email messages. Most spam gateways can scan files for malicious software and filter those messages before delivery to the recipient."
    },
    {
        "question": "A user has reported their tablet is not able to retrieve or send mail, browse the Internet, or connect to video conferences. Apps on the device which do not require connectivity are working as expected. Which of these would be the MOST likely cause of this issue?",
        "choices": {
            "A": "Battery is very low",
            "B": "The Wi-Fi network is out of range",
            "C": "The touch screen needs calibration",
            "D": "The tablet is overheated"
        },
        "answer": "B",
        "reason": "A Wi-Fi network has limited range, and poor connectivity would result in communications issues, application faults, and other networking issues."
    },
    {
        "question": "A PC technician has been asked to replace the LCD on a touch-screen laptop computer. Which of the following would be the MOST important component to test after this replacement?",
        "choices": {
            "A": "Digitizer",
            "B": "Keyboard",
            "C": "Audio controls",
            "D": "System memory"
        },
        "answer": "A",
        "reason": "A digitizer is built into the LCD display, and it would be the most likely component to have a problem after the entire display has been replaced."
    },
    {
        "question": "The computers in the shipping department are receiving the message “No connectivity” on their computers. The ipconfig output on one of the computers provides this information:\n    IPv4 Address: 192.168.1.22\n    Subnet Mask: 255.255.255.0\n    Default Gateway: 192.168.1.1\nFrom this device, a technician is able to successfully ping 127.0.0.1 and 192.168.1.22. The technician can also ping other devices in the shipping department, but cannot receive a ping response from servers in the data center or from the 192.168.1.1 address.\nWhich of these would be the MOST likely cause of this issue?",
        "choices": {
            "A": "The DHCP server is down",
            "B": "The wireless network is experiencing interference",
            "C": "The local router is down",
            "D": "The Internet provider is experiencing an outage"
        },
        "answer": "C",
        "reason": "The default gateway is the local router for the IP subnet. If the default gateway address of 192.168.1.1 is not responding to a ping, then the router may not be operational."
    },
    {
        "question": "Which of the following would be the BEST way to activate the screen of a smartphone without physically touching the display?",
        "choices": {
            "A": "Trackpad",
            "B": "Port replicator",
            "C": "Smart card reader",
            "D": "Touch pen"
        },
        "answer": "D",
        "reason": "A touch pen provides for interaction of a touch screen without physically pressing the display with a fingertip. Touch pens are often referenced as a touchscreen pen, touch screen stylus, or capacitive stylus."
    },
    {
        "question": "A graphics designer is working on a computer that powers itself off after about an hour of work. The computer tends to power down when working on complex designs that require extensive CPU utilization. Which of the following would be the MOST likely reason for this issue?",
        "choices": {
            "A": "The case fans are blocked",
            "B": "The hard drive is failing",
            "C": "The graphics software is corrupted",
            "D": "A device driver is outdated"
        },
        "answer": "A",
        "reason": "Most motherboards are designed to power off automatically if the temperatures become excessive. If the case fans are blocked, the inside of the computer will not be able to efficiently cool the system. Eventually, the heat from the heavily-worked CPU will cause the system to power down."
    },
    {
        "question": "Which of these services would be associated with a Windows file transfer?",
        "choices": {
            "A": "LDAP",
            "B": "SMB",
            "C": "IMAP",
            "D": "SSH"
        },
        "answer": "B",
        "reason": "SMB (Server Message Block) is the protocol used by Microsoft Windows for file sharing, printer sharing, and other Windows services. SMB commonly uses port 445 to provide direct SMB communication between Windows devices."
    },
    {
        "question": "A server administrator is configuring a new system for virtualization. Which of the following configurations would provide virtualization support on an Intel CPU?",
        "choices": {
            "A": "Install a 64-bit operating system",
            "B": "Turn on HTT",
            "C": "Allocate a larger amount of storage space to the virtualization partition",
            "D": "Enable VT in the firmware"
        },
        "answer": "D",
        "reason": "Many Intel processors support VT, or Intel Virtualization Technology. This CPU (Central Processing Unit) feature for virtualization provides hardware support for hypervisors and can make the virtualization process much more efficient than running the virtual machines in a software-only environment."
    },
    {
        "question": "A user in the shipping department is printing a single page to your laser printer, but the output includes the printed page with three or four pages stuck together underneath it. Which of these would be the most likely cause of this issue?",
        "choices": {
            "A": "Duplexer",
            "B": "Transfer belt",
            "C": "Fuser assembly",
            "D": "Separation pad",
            "E": "Imaging drum"
        },
        "answer": "D",
        "reason": "The separation pad ensures that the printer will pull a single page from the paper tray at a time. As the separation pad becomes worn, more than one page can inadvertently be pulled through the laser printing process."
    },
    {
        "question": "A company is using a cloud-based service that provides a hardware platform and no additional software. Which of these would BEST describe this purchase?",
        "choices": {
            "A": "SaaS",
            "B": "Hybrid",
            "C": "Metered",
            "D": "IaaS"
        },
        "answer": "D",
        "reason": "IaaS (Infrastructure as a Service) is a model that provides the computing platform, but no additional software. The user will usually configure the platform with the appropriate CPU, memory, and storage options, and the service provider is only responsible for the uptime and availability of the hardware platform. The user is generally responsible for all software administration."
    },
    {
        "question": "While working at their desk, a laptop user would like to use a full-size keyboard and external mouse. They would also like to connect to a monitor and wired network without connecting and disconnecting cables each time they leave the desk. Which of these would be the BEST way to provide this functionality?",
        "choices": {
            "A": "Use separate desktop and laptop computers",
            "B": "Install a docking station at the user’s desk",
            "C": "Use a wireless access point at the user’s desk",
            "D": "Install a USB hub for the laptop"
        },
        "answer": "B",
        "reason": "A docking station provides the laptop with a single connection to video, network, keyboard, mouse, and other peripheral connections on their desk."
    },
    {
        "question": "A server administrator needs to store gigabytes of server performance statistics for future analysis. The data needs to be always be available, even if a storage drive fails. Which of the following would be the BEST choice for this data?",
        "choices": {
            "A": "Optical drive",
            "B": "SD",
            "C": "RAID",
            "D": "CompactFlash"
        },
        "answer": "C",
        "reason": "Most RAID (Redundant Array of Independent Disks) configurations support the use of multiple drives for redundancy, even if a single drive was to fail."
    },
    {
        "question": "In which of the following would a cable with a DB-9 connector be used?",
        "choices": {
            "A": "Attaching a mouse or keyboard to a desktop computer",
            "B": "Configuring a router",
            "C": "Connecting an external storage device",
            "D": "Attaching a video camera to a computer"
        },
        "answer": "B",
        "reason": "A DB-9 connector, or less commonly, DE-9 (D-subminiature size E, 9 pin) is a connector used to send serial signals to another device. A DB-9 connector on a computer is commonly used to connect to the management interface of a switch, router, firewall, or another infrastructure device."
    },
    {
        "question": "A workstation administrator is configuring a new system for graphics designers, and the users have requested the fastest possible storage speed for reading and writing data. Which of the following would be the BEST choice for this requirement?",
        "choices": {
            "A": "10 TB NAS",
            "B": "8 TB HDD",
            "C": "5 TB SAN",
            "D": "2 TB SSD"
        },
        "answer": "D",
        "reason": "The most important requirement for this new system is the speed of reading and writing data. Of the available options, the fastest throughput is an SSD (Solid-State Drive). Although the storage space is the lowest of the available options, the users didn't specify any minimum storage size requirements."
    },
    {
        "question": "A user has connected a new laptop to an LCD projector in a conference room. About thirty minutes into the presentation, the projector light turns off but the projector fans continue to run. Which of the following would be the MOST likely reason for this issue?",
        "choices": {
            "A": "Incorrect laptop cable",
            "B": "Poor projector airflow",
            "C": "Dead pixels",
            "D": "Incorrect resolution setting"
        },
        "answer": "B",
        "reason": "The lamp in an LCD projector can get very hot, and there are often many fans used to keep the lamp cool enough to work properly. If the fans are not working properly or the airflow is blocked, the projector will automatically shut down to prevent any heat damage."
    },
    {
        "question": "A marketing manager is printing a document on the company letterhead stored in one of the printer trays. However, the output is instead printed from a tray containing plain paper. Which of the following would be the BEST way to resolve this issue?",
        "choices": {
            "A": "Select the duplex print option",
            "B": "Enable collated output",
            "C": "Modify the output tray in the print dialog",
            "D": "Change the output orientation"
        },
        "answer": "C",
        "reason": "The printer dialog shown during the print process should provide an option to choose the tray for the print job. If the tray selection is available, the option should be available in the print driver properties."
    },
    {
        "question": "A system administrator has noticed that their cloud implementation supports multiple application instances during the busy workday, but only one application instance is available during the slower evening shifts. Which of the following would BEST describe this functionality?",
        "choices": {
            "A": "Metered utilization",
            "B": "Rapid elasticity",
            "C": "High availability",
            "D": "Shared resources",
            "E": "File synchronization"
        },
        "answer": "B",
        "reason": "Rapid elasticity is a cloud characteristic used to increase and decrease the available resources as the application load changes."
    },
    {
        "question": "A security administrator would like to ensure that each login attempt from a smartphone is from someone physically located inside the corporate office. Which of the following would provide this functionality?",
        "choices": {
            "A": "Serial interface",
            "B": "GPS",
            "C": "iCloud",
            "D": "Hotspot"
        },
        "answer": "B",
        "reason": "GPS (Global Positioning System) devices are very useful for mapping travel routes and destinations, and the GPS locations can be used by an application to identify the location of the device."
    },
    {
        "question": "A technician is connecting USB interfaces on a computer case to the motherboard. Which of the following would be commonly used for this connectivity?",
        "choices": {
            "A": "PCIe",
            "B": "eSATA",
            "C": "TPM",
            "D": "Headers"
        },
        "answer": "D",
        "reason": "A header, or pin header, is a group of pins on the motherboard. These pins provide connectivity to different motherboard features, such as power, lights, peripheral connections, and more."
    },
    // {
    //     "question": "A company is building an ARM-based IoT device for the consumer market. Which of the following would be an advantage of using the ARM architecture for this product? (Choose TWO)",
    //     "choices": {
    //         "A": "Redundancy",
    //         "B": "High speed networking",
    //         "C": "Low power use",
    //         "D": "NAS",
    //         "E": "Load balancing",
    //         "F": "Minimal heat"
    //     },
    //     "answer": ["C", "F"],
    //     "reason": "ARM (Advanced RISC [Reduced Instruction Set Computer] Machine) processors use a simplified instruction set for efficient processing using relatively minimal power and heat."
    // },
    {
        "question": "A manufacturing company uses a specialized printer which connects to a Windows computer over a USB connection. Which of the following would be the BEST way to allow all Windows devices in the company to send print jobs to this printer?",
        "choices": {
            "A": "Connect using AirPrint",
            "B": "Configure Windows Printer Sharing",
            "C": "Use Print to File and copy the file to the printer",
            "D": "Copy the print jobs to a USB drive"
        },
        "answer": "B",
        "reason": "Windows Printer Sharing allows the Windows computer to act as a print server. All devices on the network can view the printer and send print jobs to the printer using the Printer Sharing feature."
    },
    {
        "question": "Which of these would commonly be used to connect to an external storage device?",
        "choices": {
            "A": "F-connector",
            "B": "ST",
            "C": "eSATA",
            "D": "Molex"
        },
        "answer": "C",
        "reason": "eSATA (External Serial ATA) is the external version of the SATA standard. The connectors for eSATA are slightly different than the internal SATA connectors."
    },
    {
        "question": "A company has acquired computers that were previously part of a third- party lease. All of the computers prompt for a password when powering on the system before the operating system will load, but the password was not included with the computers. Which of the following would be the BEST way to resolve this issue?",
        "choices": {
            "A": "Replace the primary storage drive",
            "B": "Boot from the Windows installation media",
            "C": "Reset the BIOS using jumpers on the motherboard",
            "D": "Disconnect the power cable for ten minutes"
        },
        "answer": "C",
        "reason": "The BIOS (Basic Input Output System) of a computer can often be assigned configuration or management passwords to prevent any changes to the BIOS settings. The BIOS also supports a boot or user password, and the system will not boot until the correct password is entered. This password can often be reset by shorting a jumper on the motherboard and restarting."
    },
    {
        "question": "A user has complained that a laptop will not charge the battery past 25% percent, and the laptop only operates for fifteen minutes when on battery power. The battery and the AC adapter have already been replaced. Which of the following components would be the MOST likely cause of this issue?",
        "choices": {
            "A": "Motherboard",
            "B": "Backlight inverter",
            "C": "802.11 adapter",
            "D": "CPU"
        },
        "answer": "A",
        "reason": "The motherboard on a laptop usually contains all of the major subsystems, including the CPU (Central Processing Unit), memory, video, and power. If the laptop will not charge a battery or power the system, then the entire motherboard will need to be replaced."
    },
    {
        "question": "A field engineer is working at a remote site that is under construction, but the site does not have an Ethernet or Wi-Fi Internet connection. Which of the following would be the BEST way to get access to the Internet at this location?",
        "choices": {
            "A": "Bluetooth",
            "B": "Hotspot",
            "C": "MAN",
            "D": "NFC"
        },
        "answer": "B",
        "reason": "Configuring a mobile phone as a hotspot allows one or more people to use the phone's Internet connection over Wi-Fi. If Internet isn't currently available from another 802.11 wireless network, then using the hotspot feature can provide an option for Internet access."
    },
    {
        "question": "Which of these would commonly be used to connect to an external storage device?",
        "choices": {
            "A": "F-connector",
            "B": "ST",
            "C": "eSATA",
            "D": "Molex"
        },
        "answer": "C",
        "reason": "eSATA (External Serial ATA) is the external version of the SATA standard. The connectors for eSATA are slightly different than the internal SATA connectors."
    },
    // {
    //     "question": "A company is building an ARM-based IoT device for the consumer market. Which of the following would be an advantage of using the ARM architecture for this product? (Choose TWO)",
    //     "choices": {
    //         "A": "Redundancy",
    //         "B": "High speed networking",
    //         "C": "Low power use",
    //         "D": "NAS",
    //         "E": "Load balancing",
    //         "F": "Minimal heat"
    //     },
    //     "answer": ["C", "F"],
    //     "reason": "ARM (Advanced RISC [Reduced Instruction Set Computer] Machine) processors use a simplified instruction set for efficient processing using relatively minimal power and heat."
    // },
    {
        "question": "A technician is connecting USB interfaces on a computer case to the motherboard. Which of the following would be commonly used for this connectivity?",
        "choices": {
            "A": "PCIe",
            "B": "eSATA",
            "C": "TPM",
            "D": "Headers"
        },
        "answer": "D",
        "reason": "A header, or pin header, is a group of pins on the motherboard. These pins provide connectivity to different motherboard features, such as power, lights, peripheral connections, and more."
    },
    {
        "question": "Which of the following would be MOST associated with a SAN?",
        "choices": {
            "A": "Bluetooth",
            "B": "RAID",
            "C": "APIPA",
            "D": "Cellular"
        },
        "answer": "B",
        "reason": "A SAN (Storage Area Network) provides access to a relatively large storage system over the network. RAID (Redundant Array of Independent Disks) is a common method of providing data redundancy for storage systems."
    },
    {
        "question": "A network administrator is using a laptop computer to configure a switch over a direct cable connection. Which of the following would BEST describe this connectivity?",
        "choices": {
            "A": "Bluetooth",
            "B": "Thunderbolt",
            "C": "Serial",
            "D": "Lightning"
        },
        "answer": "C",
        "reason": "Most infrastructure devices provide a management or console interface over a serial link. These have traditionally used DB-9 (D-Subminiature size B - 9 pin) interfaces, but newer devices often use USB (Universal Serial Bus) connections."
    },
    {
        "question": "A manager in the accounting department is complaining of slow performance on her computer. Initial troubleshooting shows low utilization of CPU and memory. A network speed test reports normal throughput to the local network devices. Which of the following would be the BEST next step for troubleshooting this issue?",
        "choices": {
            "A": "Boot to Safe Mode",
            "B": "Upgrade the BIOS",
            "C": "Replace the memory modules",
            "D": "Perform a hard drive diagnostic"
        },
        "answer": "D",
        "reason": "If a slowdown is not associated with CPU, memory, or the network, then the issue may be with some other type of hardware. A diagnostic of the hard drive would identify any issues that may be slowing down the computer."
    },
    {
        "question": "A server administrator has moved a database server from a lab to a data center. After installing the server in a data center rack, the system does not power on. None of the system lights are on, and the power supply and cooling fans do not spin up. Which of the following should be the FIRST troubleshooting step for this issue?",
        "choices": {
            "A": "Replace the power supply",
            "B": "Reseat all of the internal components",
            "C": "Check the power cable",
            "D": "Replace the motherboard"
        },
        "answer": "C",
        "reason": "When troubleshooting, the easiest possible solution should usually be the first one to check. This particular system has already been in use, and the system administrator was the person who moved it from one location to another. Of the available options, checking the power cable should be the first thing to check when power issues arise."
    },
    {
        "question": "A user is traveling and has enabled airplane mode on their laptop, but they would still like to use their wireless headset. Which of these settings should be enabled to allow this functionality?",
        "choices": {
            "A": "Wi-Fi",
            "B": "USB",
            "C": "Bluetooth",
            "D": "Cellular"
        },
        "answer": "C",
        "reason": "Bluetooth networks are PANs (Personal Area Networks) that provide a short-distance connection to local peripherals. For example, it's common to use a Bluetooth link to connect to headsets, wireless mice, keyboards, or speakers."
    },
    {
        "question": "A user has submitted a job to a network printer, but the printer will not begin to print until the user has typed their PIN on the printer console. Which of the following would BEST describe this scenario?",
        "choices": {
            "A": "Badging",
            "B": "Secured prints",
            "C": "Active Directory",
            "D": "ADF"
        },
        "answer": "B",
        "reason": "With secured prints, the user can define a PIN (Personal Identification Number) on their computer, and this PIN must be used on the printer to start the printing process. This process ensures the output is not sitting unattended on the printer."
    },
    {
        "question": "A system administrator has been asked to troubleshoot a non-operational print server. The printer displays an error code on the front panel and does not respond to any user input. The system administrator has created a list of four theories that might cause this particular error. Which of the following would be the best NEXT troubleshooting step?",
        "choices": {
            "A": "Test each theory on a lab system",
            "B": "Document the theories in the company knowledgebase",
            "C": "Try different theories on the print server until the problem is resolved",
            "D": "Replace the print server device"
        },
        "answer": "A",
        "reason": "Before a plan of action can be established, it's important to know which plan to follow. Testing each theory can help determine which guesses might resolve the issue and which theories had no effect."
    },
    {
        "question": "Which of these devices sends incoming traffic to every other port on the device?",
        "choices": {
            "A": "Router",
            "B": "Unmanaged switch",
            "C": "Cable modem",
            "D": "Hub"
        },
        "answer": "D",
        "reason": "A hub does not make any forwarding decisions based on the contents of a network frame. When the frame is received by the hub, it sends a copy of that frame to every other interface on the hub."
    },
    {
        "question": "Which of these wireless standards was the first to introduce 54 Mbit/sec throughput on the 2.4 GHz band?",
        "choices": {
            "A": "802.11g",
            "B": "802.11ac",
            "C": "802.11n",
            "D": "802.11b"
        },
        "answer": "A",
        "reason": "802.11g used the same 2.4 GHz frequencies as the 802.11b standard, but the maximum theoretical throughput was increased from 11 megabits per second to 54 megabits per second."
    },
    {
        "question": "An organization has implemented a cloud solution using a third-party data center. Access to the cloud service is available to anyone on the Internet. Which of the following describes this deployment model?",
        "choices": {
            "A": "Hybrid",
            "B": "Public",
            "C": "Community",
            "D": "Private"
        },
        "answer": "B",
        "reason": "Public cloud deployments are for organizations that would like to provide services to anyone on the Internet. Google Mail is an example of a public cloud service."
    },
    {
        "question": "What voltages would be commonly found on a motherboard's power supply connector?",
        "choices": {
            "A": "120 V AC",
            "B": "12 V AC, 5 V AC, 3.3 V AC",
            "C": "12 V DC, 5 V DC, 3.3 V DC",
            "D": "120 V DC"
        },
        "answer": "C",
        "reason": "A computer's power supply provides direct current (DC) at twelve volts, five volts, and 3.3 volts."
    },
    {
        "question": "A user is reporting this message on their Windows computer taskbar icon: 'Limited or No connectivity.' Which of the following would be the best NEXT troubleshooting step?",
        "choices": {
            "A": "Check the local IP address configuration",
            "B": "Restart the computer",
            "C": "Ping the default gateway",
            "D": "Check the switch VLAN configuration",
            "E": "Check for a duplicate IP address"
        },
        "answer": "A",
        "reason": "The message of limited connectivity is usually based on a system with no access to network resources. This is often occurs when a system is unable to contact a DHCP (Dynamic Host Configuration Protocol) server and instead assigns itself an APIPA (Automatic Private IP Addressing) address."
    },
    {
        "question": "What kind of device is installed into a computer and directly connects the computer to an Ethernet network?",
        "choices": {
            "A": "NIC",
            "B": "Switch",
            "C": "Repeater",
            "D": "Bridge"
        },
        "answer": "A",
        "reason": "A NIC (Network Interface Card) is the hardware used to connect a device to a network."
    },
    {
        "question": "A network administrator is planning to connect the network of two buildings together with a Category 6A cable.Ten Ethernet cables have been run from a wiring closet, through a conduit, and into a wiring closet on the other side. The network administrator needs to identify the ends of the cables so they can be properly terminated on each side. Which of the following should be used to complete this task?",
        "choices": {
            "A": "Cable stripper",
            "B": "Loopback plug",
            "C": "Tone generator",
            "D": "Crimper"
        },
        "answer": "C",
        "reason": "A tone generator places an analog audio tone onto the wires of a cable, and an inductive probe is used on the other end to precisely identify the cable with the tone."
    },
    {
        "question": "A server administrator has replaced a bad hard drive in a RAID array and has verified the array is operating with full functionality. Which of the following would be the best NEXT troubleshooting step?",
        "choices": {
            "A": "Run diagnostics on the bad hard drive",
            "B": "Replace the RAID controller",
            "C": "Create a list of optional troubleshooting steps",
            "D": "Document the drive replacement"
        },
        "answer": "D",
        "reason": "After an issue has been resolved, the last step of the troubleshooting process is to document the issue, the solution, and any important details identified during the troubleshooting process."
    },
    {
        "question": "An application developer is designing an app which uses three servers running simultaneously as VMs on her desktop. An upgrade to the application will add three additional servers to the list of running VMs. Which of these hardware resources will be the MOST important for this upgrade?",
        "choices": {
            "A": "Video adapter",
            "B": "Network connection",
            "C": "RAM",
            "D": "CPU"
        },
        "answer": "C",
        "reason": "Without any additional information about the applications, the most critical resource for these new servers will be the amount of RAM required to keep all of the operating systems running simultaneously."
    },
    {
        "question": "A company has experienced a significant increase in printing costs over the last few months. Which of the following would provide the best way to track and manage these costs?",
        "choices": {
            "A": "Audit logs",
            "B": "Print spooler uptime",
            "C": "Power usage monitor",
            "D": "Packet captures"
        },
        "answer": "A",
        "reason": "Audit logs can be used to provide detailed information about print jobs, number of pages printed, the usernames submitting the print jobs, and much more."
    },
    {
        "question": "A network engineer is troubleshooting an issue communicating to the Internet over a newly installed DSL connection. A laptop is connected to a DSL router over twisted pair copper. The IP configuration of the laptop is: IP address: 169.254.228.109 Subnet mask: 255.255.0.0 DNS: 9.9.9.9 Which of the following should be the NEXT troubleshooting step?",
        "choices": {
            "A": "Reset the DSL modem",
            "B": "Modify the subnet mask",
            "C": "Change the DNS server address",
            "D": "Check the status of the DHCP server"
        },
        "answer": "D",
        "reason": "A DHCP (Dynamic Host Configuration Protocol) server automatically distributes IP addresses to new devices connecting to a network. If the DHCP server isn't available, a device will commonly auto-configure itself with an APIPA (Automatic Private IP Addressing) address."
    },
    {
        "question": "A user in the accounting department has configured their mobile phone as a hotspot. Which of these would BEST describe this configuration?",
        "choices": {
            "A": "Use the phone as a method of payment",
            "B": "Fast-charge the phone",
            "C": "Access the Internet through the phone",
            "D": "Connect to external speakers"
        },
        "answer": "C",
        "reason": "Many smartphones include a hotspot feature, allowing a user to turn their phone into an Internet router."
    },
    {
        "question": "A user has logged into their laptop using a fingerprint reader on the laptop's keyboard tray. Which of the following would BEST describe this technology?",
        "choices": {
            "A": "NFC",
            "B": "GPS",
            "C": "Screen digitizer",
            "D": "Biometrics"
        },
        "answer": "D",
        "reason": "Biometrics provide a way to authenticate using something physical about a person. Some common biometric systems will evaluate a fingerprint, face recognition, or other physical trait to complete the authentication process."
    },
    {
        "question": "An organization has recently implemented a browser-based email system that requires no additional software on the user devices. Which of the following would describe this type of application?",
        "choices": {
            "A": "SaaS",
            "B": "IaaS",
            "C": "HaaS",
            "D": "PaaS"
        },
        "answer": "A",
        "reason": "SaaS (Software as a Service) is on-demand software. The client does not maintain a local software installation, and the application support is managed by the service provider."
    },
    {
        "question": "What type of power supply can operate across countries using different voltages?",
        "choices": {
            "A": "High-voltage",
            "B": "Primary",
            "C": "Modular",
            "D": "Auto switching"
        },
        "answer": "D",
        "reason": "An auto switching power supply can automatically detect and use different input voltages without the need to manually select an input voltage."
    },
    {
        "question": "A user is reporting after starting their desktop, they receive the message “Windows has detected an IP address conflict.” Which of the following would be the BEST way to resolve this issue?",
        "choices": {
            "A": "Replace the Ethernet patch cable",
            "B": "Enable DHCP on the workstation",
            "C": "Bounce the switch port",
            "D": "Reboot the default gateway"
        },
        "answer": "B",
        "reason": "If a device is configured for manual addressing, then configuring the device to receive IP addresses via DHCP can avoid possible address duplication."
    },
    {
        "question": "Each time a user logs in, they must type their password and a random number from a smartphone app. Which of the following would BEST describe this process?",
        "choices": {
            "A": "PRL update",
            "B": "Bluetooth pairing",
            "C": "NFC data transfer",
            "D": "Two-factor authentication"
        },
        "answer": "D",
        "reason": "Two-factor authentication requires two separate types of proof during the login process."
    },
    {
        "question": "Which of the following would be used to terminate a copper Ethernet patch cable?",
        "choices": {
            "A": "BNC",
            "B": "RS-232",
            "C": "RJ45",
            "D": "DB-9"
        },
        "answer": "C",
        "reason": "Copper Ethernet cables are commonly terminated with an 8P8C (Eight Position / Eight Conductor) RJ45 (Registered Jack 45) standard connector."
    },
    {
        "question": "A technician has replaced a laser printer toner cartridge, but now the output does not appear as dark as the original toner cartridge. Which of the following would be the best way to address this issue?",
        "choices": {
            "A": "Run a printer calibration",
            "B": "Replace the fuser",
            "C": "Use a laser printer maintenance kit",
            "D": "Clean the OPC drum"
        },
        "answer": "A",
        "reason": "A laser printer calibration allows the user to adjust the amount of toner used for the output."
    },
    {
        "question": "A system administrator has just received a laptop previously sent out for repair. However, after powering on the computer, the laptop no longer responds to the stylus. Which of the following is the MOST likely reason for this issue?",
        "choices": {
            "A": "The GPU requires an updated device driver",
            "B": "The display needs a new inverter",
            "C": "The display needs to be paired to the laptop motherboard",
            "D": "The digitizer is faulty"
        },
        "answer": "D",
        "reason": "The digitizer converts the touch of a finger or a stylus to digital signals used by the computer."
    },
    {
        "question": "A graphics designer has noticed that small dots on their screen remain a solid black color, even when the image should display a different color. Which of the following would describe this issue?",
        "choices": {
            "A": "Burn-in",
            "B": "Non-native resolution",
            "C": "Incorrect data source",
            "D": "Dead pixel"
        },
        "answer": "D",
        "reason": "A dead pixel is a single dot (pixel) on the screen that always remains black and does not change with the image."
    },
    {
        "question": "A gaming enthusiast has upgraded his home computer from integrated graphics to a separate video adapter card. The computer operates as expected for web browsing and word processing applications. However, playing a game results in the system shutting down after a few minutes of operation. Which of the following would be the MOST likely component causing this issue?",
        "choices": {
            "A": "CPU",
            "B": "Power supply",
            "C": "RAM",
            "D": "SSD"
        },
        "answer": "B",
        "reason": "Adding additional components to a computer can often increase the power usage, and video adapter cards are one of the most power-hungry devices you can add to a computer. If a system is displaying errors or shutting down during periods of heavy use, then the issue is commonly related to heat or power."
    },
    {
        "question": "A network administrator has just installed a new access point in a downtown office building, but now users are reporting intermittent connectivity to the Internet. Which of the following would be the FIRST thing to check?",
        "choices": {
            "A": "SSID broadcast option",
            "B": "Firmware version",
            "C": "MAC filter",
            "D": "Channel interference levels"
        },
        "answer": "D",
        "reason": "In areas with many different organizations located near each other, it's possible that the frequencies used on different wireless access points could conflict with each other and cause interference with wireless communication. In busy areas, it's recommended to perform an analysis of the frequencies in use before installing a new access point."
    },
    {
        "question": "A company would like to advertise a list of email servers authorized to send messages on their behalf. Which of the following would be the BEST way to provide this information?",
        "choices": {
            "A": "APIPA",
            "B": "Proxy server",
            "C": "UTM",
            "D": "SPF record"
        },
        "answer": "D",
        "reason": "An SPF (Sender Policy Framework) record is part of a DNS (Domain Name System) server configuration, and it lists all servers authorized to send emails for a particular domain."
    },
    {
        "question": "A company assigns IP addresses automatically to each device, and those addresses will remain on the device for a minimum of 8 hours. Which of the following BEST describes this configuration?",
        "choices": {
            "A": "Subnet mask",
            "B": "Lease",
            "C": "SDN",
            "D": "Reservation"
        },
        "answer": "B",
        "reason": "A lease is used in DHCP (Dynamic Host Configuration Protocol) to automatically associate an IP address configuration with a specific device for a certain amount of time. The device usually has the option to renew the lease to extend the configuration settings for another interval."
    },
    {
        "question": "Users in the marketing department are reporting that one network printer is not working. There are many print jobs in the queue, but none of the jobs are printing. A test print from the printer's front panel does not print any pages. What is the MOST likely reason for this printing issue?",
        "choices": {
            "A": "Printer drivers need to be updated",
            "B": "Network is disconnected",
            "C": "Printer hardware has failed",
            "D": "Print spooler needs to be restarted"
        },
        "answer": "C",
        "reason": "If the printer was operational, then a printer test from the front panel should provide some output. The test print bypasses the network and print spooler and provides a check for print quality. If the local test print isn't working, then the printer itself has some type of hardware failure."
    },
    {
        "question": "A member of the accounting department would like to work remotely while attending a conference in another city. Which of these technologies would BEST provide this functionality?",
        "choices": {
            "A": "VLAN",
            "B": "802.11",
            "C": "VPN",
            "D": "PAN"
        },
        "answer": "C",
        "reason": "A VPN (Virtual Private Network) would allow a remote user to connect to the corporate office over a secure encrypted tunnel."
    },
    {
        "question": "In which of the following situations would you be MOST likely to use a network tap?",
        "choices": {
            "A": "Attach an RJ45 connector to the end of an Ethernet cable",
            "B": "Capture packets from a network link",
            "C": "Test packet loss on a router interface",
            "D": "Locate a specific workstation connection on a punch-down block"
        },
        "answer": "B",
        "reason": "A network tap provides a physical connection for intercepting network traffic. The tap can send a copy of the intercepted traffic to a packet capture device or security tool."
    },
    {
        "question": "A digital graphics department has been using a SAN to store their image files. The team now reports that all of the files on the SAN are no longer accessible. Which of the following should be the FIRST thing to check on the SAN?",
        "choices": {
            "A": "RAID array status",
            "B": "CPU utilization",
            "C": "Input voltage",
            "D": "Cache hits"
        },
        "answer": "A",
        "reason": "A SAN (Storage Area Network) is a network-connected storage array. If the SAN is unavailable, then it's possible that the drive array is having a technical issue. The first thing to check on the SAN is the RAID array health and network connectivity. Once those are verified to be working, the troubleshooting can continue."
    },
    {
        "question": "A network administrator is installing a new access point between buildings. Which of the following would determine the usable frequencies and maximum signal strength for this connection?",
        "choices": {
            "A": "End User License Agreement",
            "B": "Type of data transferred",
            "C": "Acceptable Use Policy",
            "D": "Government regulations"
        },
        "answer": "D",
        "reason": "Most governments will regulate the usable frequencies and maximum power for the wireless spectrum. These regulations can vary depending on location, frequencies, or type of network."
    },
    {
        "question": "What is RAID0 great for?",
        "choices": {
            "A": "Speed and data redundancy",
            "B": "Data redundancy",
            "C": "Speed but provides no data redundancy",
            "D": "Losing data"
        },
        "answer": "C",
        "reason": "RAID0 is great for speed but provides no data redundancy."
    },
    {
        "question": "Which RAID level provides full redundancy?",
        "choices": {
            "A": "RAID0",
            "B": "RAID1",
            "C": "RAID5",
            "D": "RAID6"
        },
        "answer": "B",
        "reason": "RAID1 provides full redundancy."
    },
    {
        "question": "What is the main benefit of RAID5?",
        "choices": {
            "A": "Striping with parity, one disk can be lost without losing any data",
            "B": "Double striping with parity, two disks can be lost without losing any data",
            "C": "Speed without data redundancy",
            "D": "Full redundancy"
        },
        "answer": "A",
        "reason": "RAID5 provides striping with parity and one disk can be lost without losing any data."
    },
    {
        "question": "Which RAID level allows for two disks to be lost without losing any data?",
        "choices": {
            "A": "RAID0",
            "B": "RAID1",
            "C": "RAID5",
            "D": "RAID6"
        },
        "answer": "D",
        "reason": "RAID6 provides double striping with parity and two disks can be lost without losing any data."
    },
    {
        "question": "Which RAID level offers both redundancy and performance?",
        "choices": {
            "A": "RAID0",
            "B": "RAID1",
            "C": "RAID5",
            "D": "RAID 10"
        },
        "answer": "D",
        "reason": "RAID 10 offers both redundancy and performance."
    },
    {
        "question": "What does hot-swappable mean?",
        "choices": {
            "A": "Capable of being removed or replaced without disruption or powering off the device",
            "B": "Cannot be removed without losing data",
            "C": "Requires device shutdown to remove or replace",
            "D": "Only applicable to external devices"
        },
        "answer": "A",
        "reason": "Hot-swappable means capable of being removed or replaced without disruption or powering off the device."
    },
    {
        "question": "Which interface allows hot-swappable capability with SATA devices?",
        "choices": {
            "A": "PATA",
            "B": "AHCI",
            "C": "USB",
            "D": "RAID"
        },
        "answer": "B",
        "reason": "Advanced Host Controller Interface (AHCI) is a technical standard developed by Intel that allows hot-swappable capability with SATA devices."
    },
    {
        "question": "What is the maximum capacity of the original secure digital (SD) cards?",
        "choices": {
            "A": "1 GB",
            "B": "2 GB",
            "C": "4 GB",
            "D": "8 GB"
        },
        "answer": "B",
        "reason": "The original secure digital (SD) cards had a maximum capacity of 2 GB."
    },
    {
        "question": "What is a port?",
        "choices": {
            "A": "A physical connector for plugging in cables",
            "B": "A logical communication endpoint that exists on a computer or server",
            "C": "A type of firewall",
            "D": "A network switch"
        },
        "answer": "B",
        "reason": "A port is a logical communication endpoint that exists on a computer or server."
    },
    {
        "question": "What is an inbound port?",
        "choices": {
            "A": "A logical communication opening on a client to call out to a server",
            "B": "A physical port on a router",
            "C": "A logical communication opening on a server that is listening for a connection from a client",
            "D": "A port used for outgoing emails"
        },
        "answer": "C",
        "reason": "An inbound port is a logical communication opening on a server that is listening for a connection from a client."
    },
    {
        "question": "What is an outbound port?",
        "choices": {
            "A": "A port used for sending data to printers",
            "B": "A logical communication opening created on a client to call out to a server that is listening for a connection",
            "C": "A port that receives data from a server",
            "D": "A physical port on a computer"
        },
        "answer": "B",
        "reason": "An outbound port is a logical communication opening created on a client to call out to a server that is listening for a connection."
    },
    {
        "question": "What is the range of well-known ports?",
        "choices": {
            "A": "0 to 1023",
            "B": "1024 to 49151",
            "C": "49152 to 65535",
            "D": "0 to 65535"
        },
        "answer": "A",
        "reason": "Well-known ports range from 0 to 1023 and are assigned by the Internet Assigned Numbers Authority (IANA)."
    },
    {
        "question": "What are registered ports?",
        "choices": {
            "A": "Ports 0 to 1023",
            "B": "Ports 1024 to 49151",
            "C": "Ports 49152 to 65535",
            "D": "Ports used for proprietary protocols"
        },
        "answer": "B",
        "reason": "Registered ports range from 1024 to 49151 and are usually assigned to proprietary protocols."
    },
    {
        "question": "What are dynamic or private ports?",
        "choices": {
            "A": "Ports 0 to 1023",
            "B": "Ports 1024 to 49151",
            "C": "Ports 49152 to 65535",
            "D": "Ports used exclusively for email communication"
        },
        "answer": "C",
        "reason": "Dynamic or private ports range from 49152 to 65535 and can be used by any application without being registered with IANA."
    },
    {
        "question": "Which port is used by the File Transfer Protocol (FTP) for file transfers?",
        "choices": {
            "A": "20, 21",
            "B": "22",
            "C": "23",
            "D": "25"
        },
        "answer": "A",
        "reason": "Ports 20 and 21 are used by the File Transfer Protocol (FTP) for insecure file transfers."
    },
    {
        "question": "Which port is used for secure remote control using a text-based environment?",
        "choices": {
            "A": "20",
            "B": "21",
            "C": "22",
            "D": "23"
        },
        "answer": "C",
        "reason": "Port 22 is used by Secure Shell (SSH) for secure remote control of another machine using a text-based environment."
    },
    {
        "question": "Which port is used by the Telnet protocol?",
        "choices": {
            "A": "20",
            "B": "21",
            "C": "22",
            "D": "23"
        },
        "answer": "D",
        "reason": "Port 23 is used by the Telnet protocol for insecure remote control of another machine using a text-based environment."
    },
    {
        "question": "Which port is used by the Simple Mail Transfer Protocol (SMTP) to send emails?",
        "choices": {
            "A": "20",
            "B": "21",
            "C": "25",
            "D": "53"
        },
        "answer": "C",
        "reason": "Port 25 is used by the Simple Mail Transfer Protocol (SMTP) to send emails over the network."
    },
    {
        "question": "Which port is used by the Domain Name Service (DNS)?",
        "choices": {
            "A": "25",
            "B": "53",
            "C": "67, 68",
            "D": "80"
        },
        "answer": "B",
        "reason": "Port 53 is used by the Domain Name Service (DNS) to convert domain names to IP addresses, and IP addresses to domain names."
    },
    {
        "question": "Which ports are used by the Dynamic Host Control Protocol (DHCP)?",
        "choices": {
            "A": "53",
            "B": "67, 68",
            "C": "80",
            "D": "110"
        },
        "answer": "B",
        "reason": "Ports 67 and 68 are used by the Dynamic Host Control Protocol (DHCP) to automatically provide network parameters such as assigned IP address, subnet mask, default gateway, and the DNS server."
    },
    {
        "question": "Which port is used by the Hypertext Transfer Protocol (HTTP)?",
        "choices": {
            "A": "80",
            "B": "110",
            "C": "143",
            "D": "443"
        },
        "answer": "A",
        "reason": "Port 80 is used by the Hypertext Transfer Protocol (HTTP) for insecure web browsing."
    },
    {
        "question": "Which port is used by the Post Office Protocol Version Three (POP3) to receive incoming emails?",
        "choices": {
            "A": "80",
            "B": "110",
            "C": "143",
            "D": "443"
        },
        "answer": "B",
        "reason": "Port 110 is used by the Post Office Protocol Version Three (POP3) to receive incoming emails."
    },
    {
        "question": "Which ports are used by the Network Basic Input/Output System (NetBIOS) for file or printer sharing in a Windows network?",
        "choices": {
            "A": "110",
            "B": "137, 139",
            "C": "143",
            "D": "161, 162"
        },
        "answer": "B",
        "reason": "Ports 137 and 139 are used by the Network Basic Input/Output System (NetBIOS) for file or printer sharing in a Windows network."
    },
    {
        "question": "Which port is used by the Internet Mail Application Protocol (IMAP) to retrieve incoming emails?",
        "choices": {
            "A": "110",
            "B": "137, 139",
            "C": "143",
            "D": "161, 162"
        },
        "answer": "C",
        "reason": "Port 143 is used by the Internet Mail Application Protocol (IMAP) to retrieve incoming emails."
    },
    {
        "question": "Which ports are used by the Simple Network Management Protocol (SNMP) to collect data about network devices and monitor their status?",
        "choices": {
            "A": "110",
            "B": "137, 139",
            "C": "143",
            "D": "161, 162"
        },
        "answer": "D",
        "reason": "Ports 161 and 162 are used by the Simple Network Management Protocol (SNMP) to collect data about network devices and monitor their status."
    },
    {
        "question": "Which port is used by the Lightweight Directory Access Protocol (LDAP) to provide directory services to a network?",
        "choices": {
            "A": "389",
            "B": "443",
            "C": "445",
            "D": "3389"
        },
        "answer": "A",
        "reason": "Port 389 is used by the Lightweight Directory Access Protocol (LDAP) to provide directory services to a network."
    },
    {
        "question": "Which port is used by the Hypertext Transfer Protocol – Secure (HTTPS) for secure web browsing?",
        "choices": {
            "A": "389",
            "B": "443",
            "C": "445",
            "D": "3389"
        },
        "answer": "B",
        "reason": "Port 443 is used by the Hypertext Transfer Protocol – Secure (HTTPS) for secure web browsing."
    },
    {
        "question": "Which port is used by the Server Message Block (SMB) for Windows file and printer sharing services?",
        "choices": {
            "A": "389",
            "B": "443",
            "C": "445",
            "D": "3389"
        },
        "answer": "C",
        "reason": "Port 445 is used by the Server Message Block (SMB) for Windows file and printer sharing services."
    },
    {
        "question": "Which port is used by the Remote Desktop Protocol (RDP) to provide graphical remote control of another client or server?",
        "choices": {
            "A": "389",
            "B": "443",
            "C": "445",
            "D": "3389"
        },
        "answer": "D",
        "reason": "Port 3389 is used by the Remote Desktop Protocol (RDP) to provide graphical remote control of another client or server."
    }
]

const practiceQuestionsA = [
    {
        "question": "The printer in the accounting department has stopped all printing processes. The print queue shows seven jobs in the queue waiting to be printed. Which of the following would be the BEST next troubleshooting step?",
        "choices": {
            "A": "Send a test job to the printer and move it to the top of the queue",
            "B": "Restart the printer's spooler",
            "C": "Install an updated version of the printer driver",
            "D": "Delete everything in the queue and resend the print jobs"
        },
        "answer": "B"
    },
    {
        "question": "A system administrator has connected an external USB drive to a computer to transfer some documents. When booting the computer, the system tries to boot from the external drive and gives an error message. Which of the following would be the BEST way to prevent the USB drive from booting?",
        "choices": {
            "A": "Modify the BIOS to boot from the internal hard drive",
            "B": "Modify the boot order in Windows Disk Management",
            "C": "Rebuild the MBR on the external hard drive",
            "D": "Disable the external drive in Device Manager"
        },
        "answer": "A"
    },
    {
        "question": "A user's print jobs to a new multifunction printer produce pages of garbled text, but jobs from other users are printing normally. Which of the following would be the MOST likely reason for this issue?",
        "choices": {
            "A": "Printer driver specifies secured prints",
            "B": "Faulty network cable",
            "C": "Print driver is configured for PCL",
            "D": "Application is not authorized to print"
        },
        "answer": "C"
    },
    {
        "question": "A network connection in a conference room was installed years ago, and there’s no documentation for the cable run. Connecting a device to the cable results in a successful Ethernet connection, so the other end of the cable should terminate somewhere in the wiring closet. Which of these tools would be the best choice to find the other end of the network connection?",
        "choices": {
            "A": "Cable tester",
            "B": "Tone generator",
            "C": "Multimeter",
            "D": "Crimper"
        },
        "answer": "B"
    },
    {
        "question": "A network administrator has received a ticket complaining of port flapping on an Ethernet switch. Which of the following would be the MOST likely reason for this issue?",
        "choices": {
            "A": "Firewall rule is blocking traffic",
            "B": "Faulty crimp on an Ethernet connector",
            "C": "Excessive jitter measurements",
            "D": "Duplex mismatch"
        },
        "answer": "D"
    },
    {
        "question": "A user has powered on their computer and received the message “Operating system not found.” A check of the system shows that the SATA drive cables are properly connected. Which of the following would be the NEXT best troubleshooting step?",
        "choices": {
            "A": "Boot to Safe Mode",
            "B": "Replace the boot drive",
            "C": "Restore from a known good backup",
            "D": "Check for removable drives"
        },
        "answer": "C"
    },
    {
        "question": "A user is having an issue with a smartphone battery bulging and physically pushing the screen away from the phone. The rest of the phone appears to be operating normally. Which of the following should be the BEST next troubleshooting step?",
        "choices": {
            "A": "Power off the phone and contact support",
            "B": "Upgrade to the latest OS version",
            "C": "Replace the screen",
            "D": "Perform a factory reset"
        },
        "answer": "A"
    },
    {
        "question": "A client’s laptop appears to boot normally, but nothing ever appears on the LCD. After closer inspection, you notice the output is visible but it's too faint to clearly see anything. What is the MOST likely cause of this issue?",
        "choices": {
            "A": "Video card",
            "B": "Inverter",
            "C": "Video driver",
            "D": "Power adapter"
        },
        "answer": "B"
    },
    {
        "question": "A graphics designer is experiencing increasing delays when accessing files on her hard drive. The user maintains a daily backup of all data on the drive. Which of these would be the BEST next troubleshooting step for this issue?",
        "choices": {
            "A": "Reinstall Windows",
            "B": "Perform a hard drive diagnostic",
            "C": "Restore from the daily backup",
            "D": "Boot to Safe Mode"
        },
        "answer": "B"
    },
    {
        "question": "Which of the following would be MOST likely found on an optical disc?",
        "choices": {
            "A": "Document archive",
            "B": "Operating system boot files",
            "C": "RAID parity files",
            "D": "BIOS configurations"
        },
        "answer": "B"
    },
    {
        "question": "When a user starts their computer, the screen remains blank and the computer beeps twice. Which of these would be the MOST likely cause of this issue?",
        "choices": {
            "A": "The boot device is not connected",
            "B": "The memory is faulty",
            "C": "The operating system has become corrupted",
            "D": "The PC is infected with malware"
        },
        "answer": "B"
    },
    {
        "question": "A firewall is configured to block email transfers from a remote server. Which of the following ports is the firewall blocking?",
        "choices": {
            "A": "443",
            "B": "22",
            "C": "23",
            "D": "25"
        },
        "answer": "D"
    },
    {
        "question": "A technician is connecting a laptop to an LCD projector in a conference room. The display on the laptop works properly, but the projector image is constantly flickering and pixelating. The technician has modified the resolution and refresh rates, but the projector image continues to flicker. Which of the following would be the BEST next troubleshooting step?",
        "choices": {
            "A": "Replace the video cable",
            "B": "Disable the laptop display",
            "C": "Replace the projector bulb",
            "D": "Power cycle the projector"
        },
        "answer": "A"
    },
    {
        "question": "The stylus on a Windows tablet will no longer interact with the user interface. Which of these would be the MOST likely cause of this issue?",
        "choices": {
            "A": "Digitizer",
            "B": "Backlight",
            "C": "Contrast",
            "D": "Inverter"
        },
        "answer": "A"
    },
    {
        "question": "A user in the accounting department needs to print a form on the laser printer on both sides of the page. Which of the following options should be configured in the accounting software?",
        "choices": {
            "A": "Collate",
            "B": "Orientation",
            "C": "Duplex",
            "D": "Resolution"
        },
        "answer": "C"
    },
    // {
    //     "question": "A user needs to connect their laptop to the wired Ethernet network, but the laptop does not have an integrated Ethernet interface. Which of the following would allow the laptop to connect to an Ethernet network? (Pick TWO)",
    //     "choices": {
    //         "A": "Docking station",
    //         "B": "VGA interface",
    //         "C": "USB to Ethernet adapter",
    //         "D": "DisplayPort to HDMI cable",
    //         "E": "DVI to HDMI adapter",
    //         "F": "Bluetooth"
    //     },
    //     "answer": ["A", "C"]
    // },
    {
        "question": "A server administrator has received an alert showing one drive in a RAID 1 array has failed. Which of the following would be the best way to resolve this alert?",
        "choices": {
            "A": "Replace the bad drive and resync the array",
            "B": "Replace all drives in the array and resync the array",
            "C": "Replace the bad drive and restore from backup",
            "D": "Convert the array to RAID 0 and replace the drive",
            "E": "Replace all drives in the array and restore from backup"
        },
        "answer": "A"
    },
    {
        "question": "A system administrator is building a server for a data center in another country. The server will manage a print queue and provide a local storage partition for temporary file transfers. Which of the following power supply specifications will be the MOST important for this server?",
        "choices": {
            "A": "Voltage input options",
            "B": "Number of PCIe connectors",
            "C": "Modular cabling",
            "D": "Fan noise rating"
        },
        "answer": "A"
    },
    // {
    //     "question": "Which of the following ports are used for file transfers? (Select TWO)",
    //     "choices": {
    //         "A": "21",
    //         "B": "110",
    //         "C": "25",
    //         "D": "23",
    //         "E": "20",
    //         "F": "53"
    //     },
    //     "answer": ["A", "D"]
    // },
    {
        "question": "Which of these technologies do not require a backlight to provide a viewable display?",
        "choices": {
            "A": "LCD",
            "B": "IPS",
            "C": "OLED",
            "D": "LED"
        },
        "answer": "C"
    },
    {
        "question": "A system administrator has tripped over an Ethernet cable and the cable’s RJ45 connector has broken. Which of the following should be used to resolve this issue?",
        "choices": {
            "A": "Punch-down tool",
            "B": "Tone generator and probe",
            "C": "Cable tester",
            "D": "Crimper"
        },
        "answer": "D"
    },
    // {
    //     "question": "A network administrator is troubleshooting a network outage, and she believes the issue is related to a bad switch. The old switch is then replaced with a newer model and the cabling is moved to the new switch. Which of the following should be the NEXT troubleshooting steps? (Choose TWO)",
    //     "choices": {
    //         "A": "Test the theory",
    //         "B": "Verify full system functionality",
    //         "C": "Establish a plan of action",
    //         "D": "Identify the problem",
    //         "E": "Document the findings"
    //     },
    //     "answer": ["A", "B"]
    // },
    {
        "question": "A newly installed MFD provides an option to \"scan to SMB.\" Which of the following would BEST describe this feature?",
        "choices": {
            "A": "Print jobs can be sent from mobile devices",
            "B": "All scans are checked for malware",
            "C": "Files are stored on a Microsoft share",
            "D": "Documents are scanned from the cloud"
        },
        "answer": "C"
    },
    {
        "question": "What type of device connects multiple computers to the network, but becomes less efficient as network traffic increases?",
        "choices": {
            "A": "Switch",
            "B": "Hub",
            "C": "Repeater",
            "D": "Router"
        },
        "answer": "B"
    },
    {
        "question": "In which of the following would a Lightning cable MOST likely be used?",
        "choices": {
            "A": "Connect a server to a display monitor",
            "B": "Increase the available memory of a device",
            "C": "Remotely control a mobile device",
            "D": "Charge a mobile device"
        },
        "answer": "D"
    },
    {
        "question": "A network administrator would like to enable DHCP on a laptop, but they would like the same IP address to be assigned to the laptop each time it starts. Which of the following would provide this functionality?",
        "choices": {
            "A": "Create an IP reservation on the DHCP server",
            "B": "Administratively configure the laptop’s MAC address",
            "C": "Use APIPA addressing",
            "D": "Assign the laptop to a static IP VLAN"
        },
        "answer": "A"
    },
    {
        "question": "A user is complaining about slow network performance from their workstation. A network technician checks the data closet and finds the wires are not properly seated in the 110 block. Which of the following should the technician use to correct this issue?",
        "choices": {
            "A": "Crimper",
            "B": "Multimeter",
            "C": "Punch-down tool",
            "D": "Cable tester"
        },
        "answer": "C"
    },
    {
        "question": "A user has just connected to a new wireless network, but they cannot view any Internet web sites. Their network configuration shows the IP address as 169.254.228.109, the subnet mask is 255.255.0.0, and they have not been assigned a default gateway. Which of these is the MOST likely cause of this issue?",
        "choices": {
            "A": "The subnet mask is not correct",
            "B": "The Internet provider is experiencing a temporary outage",
            "C": "The DHCP server is down",
            "D": "The wireless adapter is not working properly"
        },
        "answer": "C"
    },
    // {
    //     "question": "A help desk technician needs to use different Windows versions to study for an industry certification exam. The technician currently uses a Windows desktop computer with 4 GB of RAM and a 750 GB free on the hard drive. Which of the following would be the BEST way to perform this task? (Choose TWO)",
    //     "choices": {
    //         "A": "Install a second monitor",
    //         "B": "Install an additional hard drive",
    //         "C": "Create a Windows Recovery Environment boot drive",
    //         "D": "Upgrade the system RAM",
    //         "E": "Install Windows guest VMs"
    //     },
    //     "answer": ["C", "E"]
    // },
    {
        "question": "While configuring a new workstation in the lab, one of the engineers recommends using 255.255.255.0. What part of the configuration is this associated with?",
        "choices": {
            "A": "Default gateway",
            "B": "Subnet mask",
            "C": "DNS server",
            "D": "IP address"
        },
        "answer": "B"
    },
    {
        "question": "Which of the following BEST describes a Bluetooth network?",
        "choices": {
            "A": "PAN",
            "B": "WAN",
            "C": "LAN",
            "D": "MAN"
        },
        "answer": "A"
    },
    {
        "question": "Sam, a user in the accounting department, is migrating from Android to iOS. She would like all of her emails, contact lists, and calendar events to be moved to her new phone. Which of the following would be the BEST way to accomplish this task?",
        "choices": {
            "A": "Use a Windows-based migration tool",
            "B": "Save the Android phone data as a CSV file",
            "C": "Connect the new phone to the corporate Microsoft 365 service",
            "D": "Use a USB-to-Lightning cable"
        },
        "answer": "C"
    },
    {
        "question": "A user's smartphone shows a black screen and does not respond to any screen taps or button presses. A check of the SIM card shows a red label but no physical damage. Which of the following is the MOST likely reason for these issues?",
        "choices": {
            "A": "Overheating",
            "B": "Digitizer failure",
            "C": "Liquid damage",
            "D": "Invalid SIM card"
        },
        "answer": "C"
    },
    {
        "question": "A server administrator has been asked to configure the storage requirements for a new database server. The database owner requires the fastest performance and redundancy if a single drive fails. The storage array should support at least 8 TB of available space. Which of the following options would be the BEST choice?",
        "choices": {
            "A": "RAID 10 with 5,400 RPM, 8 TB drives",
            "B": "RAID 5 with 10,000 RPM, 5 TB drives",
            "C": "RAID 1 with 7,200 RPM, 8 TB drives",
            "D": "RAID 0 with 15,000 RPM, 5 TB drives"
        },
        "answer": "C"
    },
    {
        "question": "A user would like to access email from their Windows 10 laptop using a smartphone’s Internet connection. Which of these technologies needs to be enabled on the laptop?",
        "choices": {
            "A": "LTE",
            "B": "802.11",
            "C": "NFC",
            "D": "IR"
        },
        "answer": "B"
    },
    {
        "question": "A system administrator needs to upgrade a laptop from a hard drive to an SSD. Which of the following would provide the most efficient method of upgrading this system?",
        "choices": {
            "A": "Create an image of the hard drive and restore to the SSD",
            "B": "Install a new Windows license and application files on the SSD",
            "C": "Backup all user documents and copy them to another computer",
            "D": "Compress the home directory and upload it to cloud storage"
        },
        "answer": "A"
    },
    {
        "question": "A new employee has been assigned a corporate smartphone, but the camera and the installation of third-party apps have been disabled. Which of the following is the MOST likely reason for these issues?",
        "choices": {
            "A": "The smartphone is out of storage space",
            "B": "The smartphone OS needs to be upgraded",
            "C": "An MDM has disabled the features",
            "D": "The smartphone hardware is faulty"
        },
        "answer": "C"
    },
    {
        "question": "A system administrator is using a maintenance kit on a network-connected laser printer. Which of the following should be the LAST step when performing this maintenance?",
        "choices": {
            "A": "Examine the feed rollers",
            "B": "Wait until the fuser unit cools down and replace it",
            "C": "Reset the page counter",
            "D": "Replace the power cord"
        },
        "answer": "D"
    },
    {
        "question": "An application developer needs to test an application across all of the operating systems used by the company. Each operating system will be tested individually in a lab environment. The company would like to minimize any additional hardware purchases for this project. Which of the following would be the BEST way to test this application?",
        "choices": {
            "A": "Purchase a system that is configured just above the hardware requirements for the highest-end operating system. Create separate VMs for each operating system.",
            "B": "Purchase individual test computers that match the hardware requirements for each OS. Install different operating systems on each test computer.",
            "C": "Designate existing user workstations to be used as testing systems. Run all application tests during non-working hours.",
            "D": "Purchase a system that matches the minimum hardware requirements for the highest-end operating system. Create a system image for each operating system and reimage the computer between tests."
        },
        "answer": "A"
    },
    {
        "question": "Which wireless standard can operate in the 5 GHz band and provides approximately 10 Gbit/sec of throughput?",
        "choices": {
            "A": "802.11ac",
            "B": "802.11g",
            "C": "802.11ax",
            "D": "802.11n"
        },
        "answer": "C"
    },
    {
        "question": "A user in the manufacturing department reports that every page printed from the central networked laser printer has a single black line extending from the top of the page to the bottom. Which of the following is the MOST likely cause of this issue?",
        "choices": {
            "A": "The fuser is damaged",
            "B": "The printer language is not properly configured",
            "C": "The photosensitive drum is damaged",
            "D": "The toner is low"
        },
        "answer": "C"
    },
    {
        "question": "Which mobile device connection is commonly used for making payments at a store checkout?",
        "choices": {
            "A": "NFC",
            "B": "Infrared",
            "C": "Cellular",
            "D": "Bluetooth"
        },
        "answer": "A"
    },
    {
        "question": "A company hosts a cloud-based application which includes redundant servers located in different data centers around the world. Which of the following cloud computing characteristics would BEST describe this application design?",
        "choices": {
            "A": "Rapid elasticity",
            "B": "High availability",
            "C": "Non-metered",
            "D": "Desktop as a Service"
        },
        "answer": "B"
    },
    {
        "question": "When printing a document on a laser printer, a user finds that all of the text on the page smears when touched. What is the MOST likely cause of this issue?",
        "choices": {
            "A": "Fuser is damaged",
            "B": "Toner cartridge is low",
            "C": "Photosensitive drum has been scratched",
            "D": "Incorrect printer driver is installed",
            "E": "Printer cleaning process is not working"
        },
        "answer": "C"
    },
    {
        "question": "A manager’s computer is able to connect to Internet sites while in conference rooms or in the building courtyard. When the laptop is brought back to the manager’s desk and placed into the docking station, the Internet access is unavailable but all other features are working. Which of the following should be the FIRST troubleshooting task for this issue?",
        "choices": {
            "A": "Replace the docking station power supply",
            "B": "Upgrade the laptop BIOS",
            "C": "Replace the docking station",
            "D": "Check the docking station network cable"
        },
        "answer": "D"
    },
    {
        "question": "A company is developing an internal application for smartphones and tablets. Which of the following would improve the security of the application's logon process?",
        "choices": {
            "A": "Data caps",
            "B": "Two-factor authentication",
            "C": "Bluetooth pairing",
            "D": "NFC"
        },
        "answer": "B"
    },
    {
        "question": "Which of the following would be MOST associated with an IoT device?",
        "choices": {
            "A": "Multithreading",
            "B": "ARM",
            "C": "Virtualization support",
            "D": "ECC RAM"
        },
        "answer": "B"
    },
    {
        "question": "What is the minimum category of unshielded copper cable for a 10 gigabit per second Ethernet link with a fifteen meter distance?",
        "choices": {
            "A": "Category 5",
            "B": "Category 6",
            "C": "Category 5e",
            "D": "Category 6A"
        },
        "answer": "B"
    },
    {
        "question": "An engineer has manually configured IP addresses for a small office that uses a cable modem for Internet connectivity. However, none of the devices configured with a manual IP address are able to browse Internet websites. All devices are connected to the cable modem with twisted-pair Ethernet cables. This is the configuration of one device: IP address: 192.168.1.7 Subnet mask: 255.255.255.0 Default gateway: 192.168.1.1 DNS: 192.168.1.7 The engineer can successfully ping the local IP address and the default gateway address. Which of the following should be the NEXT troubleshooting step?",
        "choices": {
            "A": "Check for duplicate IP addresses",
            "B": "Replace the Ethernet cable",
            "C": "Check the DNS configuration",
            "D": "Replace the cable modem"
        },
        "answer": "C"
    },
    {
        "question": "A user in a remote office is connecting a device using an F-connector. Which of the following would be MOST likely associated with this connection?",
        "choices": {
            "A": "Cable modem",
            "B": "Switch",
            "C": "Punchdown block",
            "D": "DSL modem"
        },
        "answer": "D"
    },
    {
        "question": "A user in the accounting department has turned on their computer and received the message “Date and Time not set.” Which of the following would be the MOST likely reason for this message?",
        "choices": {
            "A": "The motherboard battery has discharged",
            "B": "Windows update has rebooted the computer",
            "C": "Daylight Saving Time occurred during the weekend",
            "D": "The BIOS was just upgraded"
        },
        "answer": "A"
    },
    // {
    //     "question": "A user in the accounting department is connecting to their monitor using HDMI. The video appears normal, but the user does not hear any audio through the monitor's speakers. Which of the following would be the two MOST likely reasons for this audio issue? (Select TWO)",
    //     "choices": {
    //         "A": "Video output does not match the native resolution",
    //         "B": "Audio controls are muted",
    //         "C": "Not enough bandwidth for audio",
    //         "D": "Internet connectivity is unavailable",
    //         "E": "OS is not configured for HDMI audio output",
    //         "F": "Display has a dead pixel"
    //     },
    //     "answer": ["B", "E"]
    // },
    {
        "question": "A system administrator has created a cloud configuration which automatically monitors utilization for usage-based billing. Which of the following describes this cloud computing characteristic?",
        "choices": {
            "A": "Metered",
            "B": "File synchronization",
            "C": "Rapid elasticity",
            "D": "High availability"
        },
        "answer": "A"
    },
    {
        "question": "A group of wireless laptops in a conference room are reporting intermittent connectivity issues. The wired computers in the room are not experiencing any network problems. A check of the laptops shows that the IP addresses and configurations appear to be correct. Which of the following would be the best NEXT troubleshooting step?",
        "choices": {
            "A": "Verify the wireless signal strength",
            "B": "Check the ARP table on the default gateway",
            "C": "Confirm the operation of the DHCP server",
            "D": "Perform a wire map on the network drops"
        },
        "answer": "C"
    },
    {
        "question": "A server administrator has been asked to troubleshoot a system that has been slowing down over time. While examining the computer, the administrator can hear a series of clicks from the inside of the case. Which of the following should be the FIRST step to address this issue?",
        "choices": {
            "A": "Replace the motherboard",
            "B": "Power the system off and back on",
            "C": "Replace the hard drive",
            "D": "Perform a full backup of the server",
            "E": "Replace the power supply"
        },
        "answer": "C"
    },
    {
        "question": "When pressing the power button on a desktop computer, the power indicator lights up but the computer does not display any message on the screen. The voltage at the wall outlet has been checked and it appears to be normal. The motherboard power connector voltage was checked, and the 12-volt pin was showing 6 volts. What is the MOST likely cause of this issue?",
        "choices": {
            "A": "The components that use 12-volt power are faulty",
            "B": "The power supply is faulty",
            "C": "The wall outlet voltage does not match the power supply",
            "D": "The motherboard is faulty"
        },
        "answer": "B"
    },
    {
        "question": "A remote user is visiting their corporate office. They have connected their laptop to the wireless network, but the corporate Internet access is performing much slower than their remote site network. Which of the following would be the most likely reason for this issue?",
        "choices": {
            "A": "The default gateway is incorrect",
            "B": "The laptop has been assigned an APIPA address",
            "C": "The user does not have permission to use the wireless network",
            "D": "There is interference with the wireless signal"
        },
        "answer": "D"
    },
    {
        "question": "A manager needs to have access to the same files, contacts, and email messages across their MacBook, iPad, and iPhone devices. Which of the following would be the BEST way to provide this synchronization?",
        "choices": {
            "A": "Authenticate to iCloud on all devices",
            "B": "Connect all devices to the MacBook using a Lightning cable",
            "C": "Copy all user documents to Google Workspace",
            "D": "Configure automatic updates in the App Store"
        },
        "answer": "A"
    },
    {
        "question": "A user is reporting that a shared laser printer in the marketing department is not printing from one particular application. The front panel of the printer shows that the printer is online and ready to receive print jobs. Other users in the department are able to successfully print to the printer. Which of the following would be the BEST next troubleshooting step?",
        "choices": {
            "A": "Power cycle the printer",
            "B": "Restart the print spooler",
            "C": "Perform a test print from the printer console",
            "D": "Verify the network printer name in the application"
        },
        "answer": "D"
    },
    {
        "question": "A network administrator is connecting four company locations in different countries. Which of the following would BEST describe this configuration?",
        "choices": {
            "A": "LAN",
            "B": "PAN",
            "C": "MAN",
            "D": "WAN"
        },
        "answer": "D"
    },
    {
        "question": "A system administrator has received a report of customers receiving email messages from the company, but upon further analysis, the messages were not actually sent by the corporation. Which of the following should be implemented to prevent these spoofed email messages?",
        "choices": {
            "A": "Add multi-factor authentication to all email logins",
            "B": "Change the passwords on all email accounts",
            "C": "Configure an SPF record in the DNS",
            "D": "Modify the firewall rules to prevent outgoing emails"
        },
        "answer": "C"
    },
    {
        "question": "A system administrator has configured a VM for dual processors, 16 GB of RAM, and 120 GB of disk space. Which of the following is required to start this VM?",
        "choices": {
            "A": "Shared network address",
            "B": "Hypervisor",
            "C": "Virtual switch",
            "D": "Video display"
        },
        "answer": "B"
    },
    {
        "question": "A site manager has noticed her smartphone has a short battery life when used at work, and the battery life is normal when working from home. The work location has limited mobile service reception, but most office services are provided over the local 802.11 Wi-Fi network. The site manager does not enable Bluetooth on her smartphone. Which of the following would be the BEST way to extend the battery life of her mobile device?",
        "choices": {
            "A": "Disable 802.11 Wi-Fi",
            "B": "Disable the cellular radio at work",
            "C": "Replace the battery",
            "D": "Enable Bluetooth on the mobile device"
        },
        "answer": "A"
    },
    {
        "question": "A desktop computer has just abruptly shut off, and pressing the power button doesn’t restart the system. There are no fans spinning, no lights are on, and no messages appear on the display. Which of these would be the MOST likely cause of this issue?",
        "choices": {
            "A": "The BIOS is configured with a startup password",
            "B": "The LCD display backlight has failed",
            "C": "The power supply is faulty",
            "D": "The master boot record is corrupted",
            "E": "The boot sector is missing"
        },
        "answer": "C"
    },
    {
        "question": "What kind of device is commonly used to filter traffic based on a predefined set of rules?",
        "choices": {
            "A": "PoE switch",
            "B": "Repeater",
            "C": "DSL modem",
            "D": "Firewall"
        },
        "answer": "D"
    },
    {
        "question": "Which of these connection types use coax to provide Internet data, voice, and video over the same wire?",
        "choices": {
            "A": "DSL",
            "B": "Cable broadband",
            "C": "ONT",
            "D": "PoE"
        },
        "answer": "B"
    },
    {
        "question": "A desktop administrator has been asked to troubleshoot a laptop computer that beeps during the power-on process while the laptop screen remains dark. Which of the following would be the best NEXT troubleshooting step?",
        "choices": {
            "A": "Implement a solution",
            "B": "Document findings",
            "C": "Establish a theory",
            "D": "Evaluate results"
        },
        "answer": "C"
    },
    {
        "question": "A user is pairing a Bluetooth headset to their smartphone. What type of security is used during the pairing process to authorize this connection?",
        "choices": {
            "A": "802.1X",
            "B": "Client certificate",
            "C": "Pre-shared key",
            "D": "PIN",
            "E": "Username and password"
        },
        "answer": "D"
    },
    {
        "question": "A company is deploying cloud-hosted virtual desktops for training room classes. The VMs have already been configured in the cloud. Which of the following is required to access these VMs using thin clients in the training room?",
        "choices": {
            "A": "High-end video cards",
            "B": "Separate Internet connection",
            "C": "Mouse, keyboard, and monitor",
            "D": "Category 6A cabling"
        },
        "answer": "C"
    },
    {
        "question": "A technician has connected a laptop to an LCD. The LCD is displaying the correct information, but all of the content appears to be fuzzy and difficult to read. Which of the following is the MOST likely reason for this issue?",
        "choices": {
            "A": "The LCD display is faulty",
            "B": "The laptop display adapter is incompatible with the LCD display",
            "C": "The laptop resolution is incorrect",
            "D": "The LCD display cable is faulty"
        },
        "answer": "C"
    },
    {
        "question": "Which of the following security technologies is used to identify individuals before granting them access to a building or restricted area?",
        "choices": {
            "A": "Biometrics",
            "B": "Proximity card",
            "C": "CCTV",
            "D": "Mantrap"
        },
        "answer": "A"
    },
    {
        "question": "A user in the marketing department would like to use a stylus to provide input through an external digitizer. Which of the following would be the BEST choice for this requirement?",
        "choices": {
            "A": "LCD touchscreen",
            "B": "Port replicator",
            "C": "Wireless mouse",
            "D": "Drawing pad"
        },
        "answer": "D"
    },
    {
        "question": "A company has designed a platform to scale up when the application use increases during the day, and scale back down at night. Which of the following BEST describes this characteristic of cloud computing?",
        "choices": {
            "A": "Resource pooling",
            "B": "Measured service",
            "C": "Hybrid",
            "D": "Rapid elasticity"
        },
        "answer": "D"
    },
    {
        "question": "A user’s tablet has stopped responding to any type of finger input on the screen. The clock and other tablet functions appear to be working. Which of the following would be the BEST way to correct this issue?",
        "choices": {
            "A": "Replace the screen",
            "B": "Reset the wireless network",
            "C": "Connect to a power source",
            "D": "Restart the tablet"
        },
        "answer": "D"
    },
    {
        "question": "A system administrator needs a secure method of storing encryption keys. Which of the following would be the BEST choice for this requirement?",
        "choices": {
            "A": "BIOS",
            "B": "Secure Boot",
            "C": "NTFS",
            "D": "HSM"
        },
        "answer": "D"
    },
    {
        "question": "A server administrator is upgrading the memory in a web server from 16 GB of non-ECC RAM to 64 GB of ECC RAM. After starting the system with the new memory, the computer beeps and nothing is displayed on the screen. Changing the number and location of new RAM modules results in the same beeping sounds and blank screen. After replacing the original 16 GB modules, the system starts normally. Which of the following is the MOST likely reason for this issue?",
        "choices": {
            "A": "The new memory is not compatible with the motherboard",
            "B": "The new memory is faulty",
            "C": "The BIOS needs to be updated",
            "D": "The system is overheating during the startup process"
        },
        "answer": "A"
    },
    {
        "question": "A workstation has been assigned an APIPA address. Which of the following would be the MOST likely reason for this assignment?",
        "choices": {
            "A": "The workstation is not connected to the wireless network",
            "B": "The DNS server is misconfigured",
            "C": "The network is using public Internet addresses",
            "D": "The DHCP server is down"
        },
        "answer": "D"
    },
    {
        "question": "Which of the following can be used to forward traffic based on a destination MAC address?",
        "choices": {
            "A": "Unmanaged switch",
            "B": "Repeater",
            "C": "Router",
            "D": "Firewall"
        },
        "answer": "C"
    },
    {
        "question": "A system administrator made some BIOS changes to a desktop computer running Windows 10, and now this message appears when starting the computer: “This drive can only boot in UEFI mode.” Which of the following would be the BEST next troubleshooting step?",
        "choices": {
            "A": "Modify the boot drive sequence",
            "B": "Enable Secure Boot",
            "C": "Remove the BIOS password",
            "D": "Boot the system with the Windows setup media"
        },
        "answer": "B"
    },
    {
        "question": "A Windows user would like to temporarily store information from RAM onto their SSD. Which of the following features should be configured?",
        "choices": {
            "A": "Multi-channel memory",
            "B": "ECC",
            "C": "System Protection",
            "D": "Virtual Memory"
        },
        "answer": "D"
    },
    {
        "question": "A technician is installing a DSL modem in a data center. Which of the following connectors would be used to connect the DSL modem to the Internet provider line?",
        "choices": {
            "A": "RS-232",
            "B": "RJ11",
            "C": "BNC",
            "D": "F-connector"
        },
        "answer": "B"
    },
    {
        "question": "Which of the following would be the BEST choice for capturing an image from a printed page and saving it on a computer?",
        "choices": {
            "A": "QR code reader",
            "B": "Optical drive",
            "C": "Flatbed scanner",
            "D": "Webcam"
        },
        "answer": "C"
    }
]

let combinedQuestions = practiceQuestionsA.concat(practiceQuestionsB);

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answerButtons");
const nextButton = document.getElementById("nextButton");
const quiz = document.getElementById("questionTracker");

let currentQuestionIndex = 0;
let score = 0;
let questions = [];

init();

function init() {
    nextButton.style.display = "none";
    let buttons = document.querySelectorAll(".button");
    randomizeQuestions();
    buttons.forEach(button => {
        button.dataset.amount = button.innerText;
        button.addEventListener("click", e => {
            buttons.forEach(button => {
                button.classList.remove("correct");
            }
            );
            let selectedButton = e.target;
            selectedButton.classList.add("correct");
            let selectedAmount = selectedButton.dataset.amount;
            switch (selectedAmount) {
                case "15"
                    :
                    questions = combinedQuestions.slice(0, 15);
                    break;
                case "25":
                    questions = combinedQuestions.slice(0, 25);
                    break;
                case "50":
                    questions = combinedQuestions.slice(0, 50);
                    break;
                case "90":
                    questions = combinedQuestions.slice(0, 90);
                    break;
                default:
                    questions = combinedQuestions
            }
        }
        );
    });
    const startButton = document.getElementById("startButton");
    startButton.addEventListener("click", startGame);
}


function startGame() {
    startButton.style.display = "none";
    randomizeQuestions();
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerText = "Next";
    let progress = document.createElement("p")
    progress.classList.add("progress");
    quiz.appendChild(progress);
    showQuestion();
}

function showQuestion() {
    resetState();
    showProgress();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNumber = currentQuestionIndex + 1;
    questionElement.innerText = questionNumber + ". " + currentQuestion.question;

    let choices = currentQuestion.choices;
    for (let choice in choices) {
        let button = document.createElement("button");
        button.innerText = choices[choice];
        button.dataset.answer = choice;
        button.classList.add("button");
        answerButtons.appendChild(button);
        button.addEventListener("click", selectAnswer);
    }
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    let selectedButton = e.target;
    let correctAnswer = questions[currentQuestionIndex].answer;
    let selectedAnswer = selectedButton.dataset.answer;
    if (selectedAnswer === correctAnswer) {
        selectedButton.classList.add("correct");
        score++;
    } else {
        selectedButton.classList.add("wrong");
    }
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.answer === correctAnswer) {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function handleNextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();

    } else {
        showScore();
    }
}

function showScore() {
    let grade = (score / questions.length) * 100;
    resetState();
    questionElement.innerText = `You got ${score} out of ${questions.length} questions correct!
    Your grade is: `;
    switch (true) {
        case grade >= 97:
            questionElement.innerText += " A+";
            break;
        case grade >= 93:
            questionElement.innerText += " A";
            break;
        case grade >= 90:
            questionElement.innerText += " A-";
            break;
        case grade >= 87:
            questionElement.innerText += " B+";
            break;
        case grade >= 83:
            questionElement.innerText += " B";
            break;
        case grade >= 80:
            questionElement.innerText += " B-";
            break;
        case grade >= 77:
            questionElement.innerText += " C+";
            break;
        case grade >= 73:
            questionElement.innerText += " C";
            break;
        case grade >= 70:
            questionElement.innerText += " C-";
            break;
        case grade >= 67:
            questionElement.innerText += " D+";
            break;
        case grade >= 65:
            questionElement.innerText += " D";
            break;
        default:
            questionElement.innerText += " F";
            break;
    }

    nextButton.innerText = "Restart";
    nextButton.style.display = "block";
    nextButton.onclick = () => {
        document.location.reload();
    }
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextQuestion();
    }
});

function showProgress() {
    let pro = document.querySelector(".progress");
    pro.innerText = `Question ${currentQuestionIndex + 1} of ${questions.length}`;
}

function randomizeQuestions() {
    combinedQuestions.sort(() => Math.random() - 0.5);
}