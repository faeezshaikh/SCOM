{
    "quiz": {
        "name": "Deployment",
        "logo" : "http://sanitaryconstruction.com/wp-content/uploads/2016/01/testi-3.jpg",
        "time":"20 minutes"
    },
    "questions": [
      {
        "Id": 1,
        "Name": "Refer to the architecture diagram below of a batch processing solution using Simple Queue Service (SQS) to set up a message queue between EC2 instances which are used as batch processors. CloudWatch monitors the number of job requests (queued messages) and an Auto Scaling group adds or deletes batch servers automatically based on parameters set in CloudWatch alarms. You can use this architecture to implement which of the following features in a cost effective and efficient manner?", 
        "Pic":"assets/img/ques2.png",
        "Tag":"Deployment",
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Coordinate number of EC2 instances with number of Job requests automatically, thus improving cost effectiveness.", "IsAnswer": true },
            { "Id": 1056, "QuestionId": 1010, "Name": "Reduce the overall time for executing Jobs through parallel processing by allowing a busy EC2 instance that receives a message to pass it to the next instance in a daisy-chain setup.", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Implement fault tolerance against EC2 instance failure since messages would remain in SQS and work can continue with recovery of EC2 instances. Implement fault tolerance against SQS failure by backing up messages to S3.", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Handle high priority Jobs before lower priority Jobs by assigning a priority metadata field to SQS messages.", "IsAnswer": false },
            { "Id": 1059, "QuestionId": 1010, "Name": "Implement message passing between EC2 instances within a batch by exchanging messages through SQS.", "IsAnswer": false }],
            "Explanation":"See link for more information",
            "Ref":"https://docs.aws.amazon.com/AutoScaling/latest/DeveloperGuide/as-using-sqs-queue.html"

    }   ,
     
      {
        "Id": 2,
        "Name": "Your system recently experienced down time. During the troubleshooting process you found that a new administrator mistakenly terminated several production EC2 instances. Which of the following strategies will help prevent a similar situation in the future? The administrator still must be able to: 1) launch, start, stop, and terminate development resources, 2) launch and start production instances.", 
        "Tag":"Deployment",
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Leverage EC2 termination protection and multi-factor authentication, which together require users to authenticate before terminating EC2 instances.", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Leverage resource based tagging, along with an IAM user which can prevent specific users from terminating production EC2 resources.", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "Create an IAM user which is not allowed to terminate instances by leveraging production EC2 termination protection.", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Create an IAM user and apply an IAM role which prevents users from terminating production EC2 instances.", "IsAnswer": false }],
            "Explanation":"See link for more information",
            "Ref":"http://blogs.aws.amazon.com/security/post/Tx29HCT3ABL7LP3/Resource-level-Permissions-for- EC2-Controlling-Management-Access-on-Specific-Ins"


    },
     
      {
        "Id": 3,
        "Name": "Your customer wishes to deploy an enterprise application to AWS, which will consist of several web servers, several application servers, and a small (50GB) Oracle database. Information is stored both in the database and the filesystems of the various servers. The backup system must support database recovery, whole server and whole disk restores, and individual file restores with a recovery time of no more than two hours. They have chosen to use RDS Oracle as the database. Which backup architecture will meet these requirements?", 
        "Tag":"Deployment",
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Backup RDS using automated daily DB backups. Backup the EC2 Instances using AMIs, and supplement with file-level backup to S3 using traditional enterprise backup software to provide file level restore.", "IsAnswer": true },
            { "Id": 1056, "QuestionId": 1010, "Name": "Backup RDS database to S3 using Oracle RMAN. Backup the EC2 instances using AMIs, and supplement with EBS snapshots for individual volume restore.", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Backup RDS using a Multi-AZ Deployment. Backup the EC2 instances using AMIs, and supplement by copying filesystem data to S3 to provide file level restore.", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Backup RDS using automated daily DB backups. Backup the EC2 instances using EBS snapshots, and supplement with file-level backups to Amazon Glacier using traditional enterprise backup software to provide file level restore.", "IsAnswer": false }],
            "Explanation":"You need to use enterprise backup software to provide file level restore. If your existing backup software does not natively support the AWS cloud, you can use AWS storage gateway products. AWS Storage Gateway is a virtual appliance that provides seamless and secure integration between your data center and the AWS storage infrastructure.",
            "Ref":"https://d0.awsstatic.com/whitepapers/Backup_and_Recovery_Approaches_Using_AWS.pdf"

    },

      {
        "Id": 4,
        "Name": "A web design company currently runs several FTP servers that their 250 customers use to upload and download large graphic files. They wish to move this system to AWS to make it more scalable, but they wish to maintain customer privacy and keep costs to a minimum. What AWS architecture would you recommend?", 
        "Tag":"Deployment",
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Ask their customers to use an S3 client instead of an FTP client. Create a single S3 bucket. Create an IAM User for each customer. Put the IAM Users in a Group that has an IAM policy that permits access to sub-directories within the bucket via use of the 'username' Policy Variable.", "IsAnswer": true },
            { "Id": 1056, "QuestionId": 1010, "Name": "Create a single S3 bucket with Requester Pays turned on and ask their customers to use an S3 client instead of an FTP client. Create a bucket for each customer with a Bucket Policy that permits access only to that one customer.", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Create a single S3 bucket with Reduced Redundancy Storage turned on and ask their customers to use an S3 client instead of an FTP client. Create a bucket for each customer with a Bucket Policy that permits access only to that one customer.", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Create an auto-scaling group of FTP servers with a scaling policy to automatically scale-in when minimum network traffic on the auto-scaling group is below a given threshold. Load a central list of FTP users from S3 as part of the User Data startup script on each instance.", "IsAnswer": false }],
            "Explanation":"See link for more info",
            "Ref":"https://aws.amazon.com/blogs/security/writing-iam-policies-grant-access-to-user-specific-folders- in-an-amazon-s3-bucket/"

    } ,
    {
        "Id": 5,
        "Name": "You are the new IT architect in a company that operates a mobile sleep tracking application. When activated at night, the mobile app is sending collected data points of 1 kilobyte every 5 minutes to your backend. The backend takes care of authenticating the user and writing the data points into an Amazon DynamoDB table. Every morning, you scan the table to extract and aggregate last night's data on a per user basis, and store the results in Amazon S3. Users are notified via Amazon SNS mobile push notifications that new data is available, which is parsed and visualized by the mobile app. Currently you have around 100k users who are mostly based out of North America. You have been tasked to optimize the architecture of the backend system to lower cost. What would you recommend? Choose 2 answers", 
        "Tag":"deployment????",
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Have the mobile app access Amazon DynamoDB directly Instead of JSON files stored on Amazon S3.", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Write data directly into an Amazon Redshift cluster replacing both Amazon DynamoDB and Amazon S3.", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Introduce an Amazon SQS queue to buffer writes to the Amazon DynamoDB table and reduce provisioned write throughput.", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, "Name": "Introduce Amazon Elasticache to cache reads from the Amazon DynamoDB table and reduce provisioned read throughput.", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, "Name": "Create a new Amazon DynamoDB table each day and drop the one for the previous day after its data is on Amazon S3.", "IsAnswer": false }],
            "Explanation":"See link for more info.",
            "Ref":"https://d0.awsstatic.com/whitepapers/performance-at-scale-with-amazon-elasticache.pdf"

    } ,
     {
        "Id": 6,
        "Name": "You deployed your company website using Elastic Beanstalk and you enabled log file rotation to S3. An Elastic MapReduce Job is periodically analyzing the logs on S3 to build a usage dashboard that you share with your CIO. You recently improved overall performance of the website using CloudFront for dynamic content delivery and your website as the origin. After this architectural change, the usage dashboard shows that the traffic on your website dropped by an order of magnitude. How do you fix your usage dashboard?", 
        "Tag":"Deployment",
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Change your log collection process to use CloudWatch ELB metrics as input of the Elastic MapReduce Job.", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Turn on CloudTrail and use trail log files on S3 as input of the Elastic MapReduce job.", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Enable CloudFront to deliver access logs to S3 and use them as input of the Elastic MapReduce job.", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, "Name": "Use Elastic Beanstalk 'Restart App Server(s)' option to update log delivery to the Elastic MapReduce job.", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Use Elastic Beanstalk 'Rebuild Environment' option to update log delivery to the Elastic MapReduce job.", "IsAnswer": false }],
            "Explanation":"See link for more info",
            "Ref":"http://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/AccessLogs.html"

    } 
     ,
     {
        "Id": 7,
        "Name": "A corporate web application is deployed within an Amazon Virtual Private Cloud (VPC), and is connected to the corporate data center via an IPsec VPN. The application must authenticate against the on- premises LDAP server. After authentication, each logged-in user can only access an Amazon Simple Storage Space (S3) keyspace specific to that user. Which two approaches can satisfy these objectives? Choose 2 answers", 
        "Tag":"Deployment",
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "The application authenticates against IAM Security Token Service using the LDAP credentials. The application uses those temporary AWS security credentials to access the appropriate S3 bucket.", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Develop an identity broker that authenticates against LDAP, and then calls IAM Security Token Service to get IAM federated user credentials. The application calls the Identity broker to get IAM federated user credentials with access to the appropriate S3 bucket.", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "The application authenticates against LDAP, and retrieves the name of an IAM role associated with the user. The application then calls the IAM Security Token Service to assume that IAM role. The application can use the temporary credentials to access the appropriate S3 bucket.", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, "Name": "The application authenticates against LDAP. The application then calls the AWS Identity and Access Management (IAM) Security Service to log in to IAM using the LDAP credentials. The application can use the IAM temporary credentials to access the appropriate S3 bucket.", "IsAnswer": false },
            { "Id": 1059, "QuestionId": 1010, "Name": "Develop an identity broker that authenticates against IAM Security Token Service to assume an IAM role in order to get temporary AWS security credentials. The application calls the identity broker to get AWS temporary security credentials with access to the appropriate S3 bucket.", "IsAnswer": false }],
            "Explanation":"Imagine that in your organization, you want to provide a way for users to copy data from their computers to a backup folder. You build an application that users can run on their computers. On the back end, the application reads and writes objects in an S3 bucket. Users don’t have direct access to AWS. Instead, the application communicates with an identity provider (IdP) to authenticate the user. The IdP gets the user information from your organization’s identity store (such as an LDAP directory) and then generates a SAML assertion that includes authentication and authorization information about that user. The application then uses that assertion to make a call to the AssumeRoleWithSAML API to get temporary security credentials. The app can then use those credentials to access a folder in the S3 bucket that’s specific to the user.",
            "Ref":"http://docs.aws.amazon.com/IAM/latest/UserGuide/id_roles_providers_saml.html"
    }
    ,
     {
        "Id": 8,
        "Name": "You've been hired to enhance the overall security posture for a very large e-commerce site. They have a well architected, multi-tier application running in a VPC that uses ELBs in front of both the web and the app tier with static assets served directly from S3. They are using a combination of RDS and DynamoDB for their dynamic data and then archiving nightly into S3 for further processing with EMR. They are concerned because they found questionable log entries and suspect someone is attempting to gain unauthorized access. Which approach provides a cost effective, scalable mitigation to this kind of attack?", 
        "Tag":"Security, Scalability, Costing",
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Recommend that they lease space at a DirectConnect partner location and establish a 1G DirectConnect connection to their VPC. They would then establish Internet connectivity into their space, filter the traffic in a hardware Web Application Firewall (WAF), and then pass the traffic through the DirectConnect connection into their application running in their VPC.", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Add previously identified hostile source IPs as an explicit INBOUND DENY NACL to the web tier subnet.", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Add a WAF tier by creating a new ELB and an AutoScaling group of EC2 Instances running a host-based WAF. They would redirect Route 53 to resolve to the new WAF tier ELB. The WAF tier would then pass the traffic to the current web tier. The web tier Security Groups would be updated to only allow traffic from the WAF tier Security Group.", "IsAnswer": true },
            { "Id": 1058, "QuestionId": 1010, "Name": "Remove all but TLS 1.2 from the web tier ELB and enable Advanced Protocol Filtering. This will enable the ELB itself to perform WAF functionality.", "IsAnswer": false }]
    } 
     ,
     {
        "Id": 9,
        "Name": "Your company produces customer commissioned one-of-a-kind skiing helmets, combining high fashion with custom technical enhancements. Customers can show off their individuality on the ski slopes and have access to head-up-displays, GPS, rear-view cams and any other technical Innovation they wish to embed in the helmet. The current manufacturing process is data rich and complex, including assessments to ensure that the custom electronics and materials used to assemble the helmets are to the highest standards. Assessments are a mixture of human and automated assessments. You need to add a new set of assessment to model the failure modes of the custom electronics using GPUs with CUDA, across a cluster of servers with low latency networking. What architecture would allow you to automate the existing process using a hybrid approach, and ensure that the architecture can support the evolution of processes over time.", 
        "Tag":"Deployment, Scalability",
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Use Amazon Simple Workflow (SWF) to manage assessments, movement of data & meta-data. Use an auto-scaling group of G2 instances in a placement group.", "IsAnswer": true},
            { "Id": 1056, "QuestionId": 1010, "Name": "Use Amazon Simple Workflow (SWF) to manage assessments, movement of data & meta-data. Use an auto-scaling group of C3 instances with SR-IOV (Single Root I/O Visualization).", "IsAnswer": false },
            { "Id": 1057, "QuestionId": 1010, "Name": "Use AWS Data Pipeline to manage movement of data & meta-data and assessments. Use auto-scaling group of C3 with SR-IOV (Single Root I/O Visualization).", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Use AWS Data Pipeline to manage movement of data & meta-data and assessments. Use an auto- scaling group of G2 instances in a placement group.", "IsAnswer": false }]
    }
    ,
     {
        "Id": 10,
        "Name": "An administrator is using Amazon CloudFormation to deploy a three tier web application that consists of a web tier and application tier that will utilize Amazon DynamoDB for storage. When creating the CloudFormation template which of the following would allow the application Instance access to the DynamoDB tables without exposing API credentials?", 
        "Tag":"Deployment, Security, N/w?",
        "Options": [
            { "Id": 1055, "QuestionId": 1010, "Name": "Create an Identity and Access Management Role that has the required permissions to read and write from the .required DynamoDB table and associate the Role to the application instances by referencing an instance profile.", "IsAnswer": false },
            { "Id": 1056, "QuestionId": 1010, "Name": "Create an Identity and Access Management Role that has the required permissions to read and write from the required DynamoDB table and reference the Role in the instance profile property of the application instance.", "IsAnswer": true },
            { "Id": 1057, "QuestionId": 1010, "Name": "Use the Parameter section in the CloudFormation template to have the user input Access and Secret keys from an already created IAM user that has the permissions required to read and write from the required DynamoDB table.", "IsAnswer": false },
            { "Id": 1058, "QuestionId": 1010, "Name": "Create an Identity and Access Management user in the CloudFormation template that has permissions to read and write from the required DynamoDB table, use the GetAtt function to retrieve the Access and Secret keys and pass them to the application instance through user-data.", "IsAnswer": false }]
    } 

     ]
}