# Question 1

The following questions review content in Lectures 1-8, with a particular
focus on Lectures 2, 3, 4a, 4b, 7, and 8. The HTML/CSS content from Lecture
6 and the git content from Lecture 7 are treated in separate quizzes.

First question: Which of the following is an example of
Infrastructure-as-a-Service (IAAS)?

- [ ] Github
- [ ] Heroku
- [x] AWS
- [ ] Stripe
- [ ] Gravatar

# Question 2

Which of the following is an example of Platform-as-a-Service (PAAS)?

- [ ] Github
- [x] Heroku
- [ ] AWS
- [ ] Stripe
- [ ] Gravatar

# Question 3

Which of the following are accurate statements about git vs. Github?

- [x] git is a free open-source project, while Github is a freemium service
provided by a technology company
- [x] git is a command line tool, while Github is a cloud service
- [ ] Github is a command line tool, while git is a cloud service
- [x] You can simultaneously use Github and other hosts like Bitbucket or Google
Code for your git repositories, due to git's distributed version control model
- [x] You can use git without Github.

# Question 4

Which statements are generally true about IAAS?

- [ ] An IAAS service must provide access to Linux virtual machines in the cloud
- [x] An IAAS service provides command line and/or root access to its machines.
- [ ] An IAAS service provides a blackbox deployment API that "just works" to
get your site on the web, without giving much access to internal details
- [ ] An IAAS service asks the end user to do less configuration than a PAAS
service, at the expense of less flexibility
- [x] An IAAS service allows you to provision, tear down, and set up new virtual
machines programmatically

# Question 5

Which statements are generally true about PAAS?

- [ ] An PAAS service must provide access to Linux virtual machines in the cloud
- [ ] A PAAS service encourages low-level control over every aspect of your
deployment servers
- [x] A PAAS service usually provides a blackbox deployment API that
"just works" to get your site on the web, without giving much access to internal
details
- [x] A PAAS service asks the end user to do less configuration than a IAAS
service, at the expense of less flexibility
- [x] A PAAS service usually stipulates conventions for how your source code
should be laid out to facilitate deployment

# Question 6

What are true statements about Linux and Unix?

- [x] Linux is a feat of reverse engineering of AT&T's proprietary Unix OS,
compliant with the POSIX standard (see here)
- [x] Linux shares no direct code with Unix (as established definitively by the
SCO Lawsuit)
- [x] Linux is a free, open-source operating system
- [x] The Android OS is based on Linux
- [ ] Linux is the same as Berkeley Software Distribution (BSD)

# Question 7

Which are valid reasons for AWS to use virtual machines for EC2 rather than give
direct access to physical servers?

- [x] VMs can allow partitioning of the same underlying 8-CPU hardware into
1, 2, 4, 8, or possibly more separate instances, thereby increasing utilization
- [x] Virtual machines can be more easily wiped and restored
- [x] Using VMs provides a layer of safety between the physical machine and
untrusted user code
- [ ] Virtual machines have better performance than physical servers
- [ ] Primarily historical reasons

# Question 8

What are STDIN, STDOUT, and STDERR?

- [x] The conventional ways to pipe data into a Unix command line program, to
output data, and to output any error messages
- [x] The three standard streams that Unix programs use to receive and send
information to their environment
- [ ] Unix programming conventions that are guidelines rather than rules
- [ ] Unix-specific file formats, like XLS or PDF
- [ ] Special environmental variables used to configure a Unix command line's
behavior

# Question 9

What is an advantage of the screen command line tool?

- [ ] It makes copy/pasting of text from a terminal window easier
- [x] It allows you to edit code on a remote machine, disconnect, and resume
where you left off
- [ ] It creates a remote terminal which is identical to your local terminal
- [ ] It screens incoming connections for bad packets, like a firewall
- [ ] It is a powerful tool for on-screen graphics and parallel processing

# Question 10

Why is it better to edit code with a text editor like emacs or vim than a
WYSIWYG word processor like MS Word?

- [ ] Historical convention on the part of programmers
- [x] A word processor will not show you the raw characters which you are
editing, but these can be important for computer programming
- [x] A word processor is primarily intended to produce documents which are read
by humans, while a text editor is capable of producing documents that are read
by machine
- [ ] Because emacs and vim are commercial programs supported by large companies,
unlike MS Word
- [ ] Strong REPL integration in MS Word

# Question 11

Why do we include "staging" in the dev/staging/production flow?

- [ ] To be compatible with git's concept of a staging area
- [x] Because the dev environment is not exactly the same as the production
environment, while staging is
- [ ] Purely historical reasons
- [ ] As a staging area for sharing and exchanging code from multiple engineers
- [ ] To slow down experienced developers

# Question 12

Which of these are disadvantages of editing code directly on a live server, and
using the deployment server as the sole source code repository?

- [x] Contention if multiple engineers try to edit the site at the same time
- [x] Lack of source code backups
- [x] Inability to rollback buggy features
- [ ] Redundancy and duplication of source code
- [x] Inability to do A/B testing

# Question 13

Roughly what percentage of the world has smartphones as of June 2013, according
to Mary Meeker's Internet Trends presentation?

- [x] 20%
- [ ] 5%
- [ ] 10%
- [ ] 70%
- [ ] 50%

# Question 14

What's Apple's primary monetization channel for mobile devices?

- [x] Hardware sales of iPhones and iPads
- [ ] The App Store
- [ ] iTunes
- [ ] iAds
- [ ] iOS developer licensing fees

# Question 15

What's Google's primary monetization channel for mobile devices?

- [x] Mobile advertising
- [ ] Google Play
- [ ] Hardware sales of Android devices
- [ ] Gmail
- [ ] Android developer licensing fees

# Question 16

Which of the following are true statements about Android and ChromeOS?

- [ ] All ChromeOS apps only work online, while Android apps work offline.
- [x] Android apps are written in Java while ChromeOS apps are written in
Javascript.
- [ ] All Android apps only work online, while ChromeOS apps work offline.
- [x] As of mid-2013, there are many more devices running Android than ChromeOS
- [x] Android is based on a model of significant native-client-centric
computation and storage/state, while ChromeOS is based on an assumption of less
powerful clients and cloud-centric computation

# Question 17

Which of the following are examples of "Internet of Things" technologies?

- [x] A pressure-sensitive egg tray which reports the numbers of eggs via API
(See here. Might actually be useful for large restaurants.)
- [x] An electronic whiteboard that uploads your drawings to a cloud folder
- [x] A smartphone-controlled lock
- [x] A self-driving car which receives maps and data from the internet
- [x] A parking meter which you can pay through a web dashboard

# Question 18

Which of the following are examples of "Quantified Self" technologies?

- [x] A wearable armband that acts as a sleep tracker and pedometer
- [x] A device which you press to your temple to read and transmit your vital signs
- [x] An internet-connected blood glucose monitor
- [x] A scale which uploads your weight to a personal cloud service
- [ ] A qualititative diagnosis by an expert physician
