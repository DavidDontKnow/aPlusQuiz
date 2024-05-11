const questions = [
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
    }
]

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answerButtons");
const nextButton = document.getElementById("nextButton");
const quiz = document.getElementById("questionTracker");

let currentQuestionIndex = 0;
let score = 0;



// startGame();
init();

function init() {
    nextButton.style.display = "none";
    const startButton = document.getElementById("startButton");
    startButton.addEventListener("click", startGame);
}


function startGame() {
    startButton.style.display = "none";
    randomizeQuestions();
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
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
    questionElement.innerHTML = questionNumber + ". " + currentQuestion.question;

    let choices = currentQuestion.choices;
    for (let choice in choices) {
        let button = document.createElement("button");
        button.innerHTML = choices[choice];
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
    resetState();
    questionElement.innerHTML = `You got ${score} out of ${questions.length} questions correct!`;
    nextButton.innerHTML = "Restart";
    nextButton.style.display = "block";
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextQuestion();
    } else {
        startGame();
    }
});

function showProgress() {
    let pro = document.querySelector(".progress");
    pro.innerHTML = `Question ${currentQuestionIndex + 1} of ${questions.length}`;
}

function randomizeQuestions() {
    questions.sort(() => Math.random() - 0.5);
}