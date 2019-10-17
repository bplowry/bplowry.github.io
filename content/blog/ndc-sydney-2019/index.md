---
title: NDC Sydney 2019
date: "2019-10-16T03:26:15.377Z"
description: "I had the chance to attend NDC Sydney for the first time. This is my first tech conference outside of Perth, and my first multi-day conference. I learned a bunch, so I wrote some of it down"
---

<span role="img" aria-label="Work in progress">👷 ‍️🚧 👷‍♂️</span>
I'll be updating this post over the next few days, fleshing out notes and adding more sessions

---

<nav id="nav">
<ul>
<li><a href="#the-care-and-feeding-of-software-developers-keynote">
<em>The care and feeding of software developers [Keynote]</em>
by Heather Downing
</a></li>
<li><a href="#kubernetes-0-to-100">
<em>Kubernetes 0 to 100</em>
by Scott Holden
</a></li>
<li><a href="#modern-javascript-for-web-dinosaurs">
<em>Modern JavaScript for web dinosaurs</em>
by Scott Holden
</a></li>
<li><a href="#lightning-talks-day-one">
<em>Lightning talks (day one)</em>
</a></li>
<li><a href="chinafy-your-apps">
<em>Chinafy your apps + Lessons you can steal from China</em>
by Adam Cogan
</a></li>
<li><a href="using-flutter-to-develop-cloud-enabled-mobile-applications">
<em>Using Flutter to develop cloud enabled mobile applications</em>
by Nick Randolph and Pooja Bhaumik
</a></li>
<li><a href="whats-going-on-with-project-fugu">
<em>What's going on with Project Fugu?</em>
by Phil Nash
</a></li>
<li><a href="how-to-do-in-app-chaos-testing">
<em>How to do in-app chaos testing</em>
by Wesley Cabus
</a></li>
<li><a href="bank-grade-security">
<em>Bank Grade Security</em>
by Kieran Jacobsen
</a></li>
<li><a href="beyond-infrastructure-as-code-dsls">
<em>Beyond infrastructure as code DSLs</em>
by Jake Ginnivan
</a></li>
<li><a href="thousands-of-concurrent-connections-with-azure-signalr-service">
<em>Thousands of concurrent connections with Azure SignalR Service</em>
by Nelly Sattari and Stafford Williams
</a></li>
</ul>
</nav>

---

<a href="#nav">Back to top</a>

## The care and feeding of software developers [Keynote] <a id="the-care-and-feeding-of-software-developers-keynote"></a>

Heather Downing <twitter-handle />

<image />

The best Leaders aren't "the best at Tech"

Get away from what makes people like you (simply interests, background etc)
Go out of your way to find the people unlike you. Equal attention

Leadership is a muscle, you need to exercise it
Don't get comfortable.
You need to sacrifice for your team

What developers want from leaders

- safety (failure, support, belief)
- flexible and empathetic during personal challenges
- listen. They speak first
- respect. Differences,
- encourage - you got this
- recognise -talk to them about their progress. The goals they're kicking. Recognise their effort
- empower - let other people demonstrate their capability. Let them grow. Help them grow

Our differences make us a better team. People are not drop in and replace

Junior. Learn, make mistakes. Grow
Mid. Pair, share, learn, Mistakes grow
Senior. Experiment, new ideas, pair share learn mistakes grow

Optimist - keep morale up. Everything is on fire, but hey, we're alive
Pessimist - make sure we're not getting ahead of ourselves

Personality types
Bold
Visionary
Downhearted - all of us at some point

Let them do their jobs
Handle all the non Dev stuff
Mostly responsive and reachable
Regular one on ones
Quality over quantity or velocity - let them do the best job they can
Avoid task switching if you can
Be the shield

Give away control
Emphasise that you're learning too
Let them fail and learn
It's ok to not know

Challenge; learn new tech. See how you can apply it. That's cool. But also learn leadership because that's your future. Whether team lead or senior. It's part of your job

<a href="#nav">Back to top</a>

## Kubernetes 0 to 100 <a id="kubernetes-0-to-100"></a>

Scott Holden <twitter-handle />

Container = code + runtime
Resource isolation

Compared to VM - no OS, and O's is huge - don't need to carry it around

All the bits of containers have been around forever. Docker put it all together and made it easy

Docker run -d --rm will clean up afterwards

Layers are shared, so we only have one copy of dependencies

Dockerfile -
FROM is like starting the image
RUN is the same as jumping in and editing

Docker desktop contains kubernetes. You can turn it on and go

Kubernetes

- scheduling
- monitoring
- scaling
- deploying new versions
- configuration
- service discovery -- where is this service

Kubernetes talks to the container runtime. It's not a container runtime itself (picture)

Master node

- cluster of master nodes
- runs kubernetes
-

Worker nodes

- some form of compute
- runs workloads
- container runtime lives here

Maybe 3 master to 5 worker

Somewhere between iaas and paas. Depends where you sit

Managed kubernetes service - don't need to think about master nodes. It just turns into configuration

_Nuts and bolts_
Pod (one or more containers)

- Single instance of the smallest component
- multi container - use for logging, monitoring, service mesh
- the pod is what scales. It all scales together
- by itself, is not resilient
- kubectl apply to create. Kubectl delete to delete a pod

ReplicaSet

- ensures you anyways have N pods running

Deployment

- deploying a new version of a ReplicaSet
- it will spin up and spin down the new and old versions
- used if you want to update things
- failback is also available

Service

- let's you load balance in cloud, expose a port per node, etc

Ingress

- expose http endpoints for different services

Extras
Autoscaling - not for free, need to configure
Namespaces - logical separation, eg Dev test
Resource quotas

AKS (Azure Kubernetes Service) - free control plane - don't pay for the VMs, don't manage them, apart from some config

Use specific versions so it spins up from cache, didn't go to registry

**my takeaway**
Kubernetes didn't mean your need huge complicated systems. Restarting a single killed pod is useful

<a href="#nav">Back to top</a>

## Modern JavaScript for web dinosaurs <a id="modern-javascript-for-web-dinosaurs"></a>

Ryan Preece @preecington

Ryan Preece

jQuery - download a file and put it on the web server with FTP

Now

- transpilers
- packages
- bundlers
- node

Before
`<script src="node_modules/jQuery" />`
Then
`require("")`
2011
Browserify
2015
Webpack

Transpiling
Don't need to worry (as much) about browser differences

Script runners
Make all those cli commands easier
Run "build" rather than "node_modules/bin/webpack webpack.config.js --production" or something else complicated

React Vue Angular use all of these things under the hood. They have cli tools to create new projects following best practices

<a href="#nav">Back to top</a>

## Lightning talks (day one) <a id="lightning-talks-day-one"></a>

Emad Alashi

Are you a good developer
We should understand one level below what we're working on

- in a human pyramid, you don't care about the bottom, only the layer you're standing on

Appetite to learn

Nelly Sattari

Brown bags

Build a network to find speakers
Great way to network
Attend other events
Companies/vendors might want to get involved

Good way to build

- your profile
- learning culture in org
- relationships with other areas of your company

Make them regular.
One now, another one later, maybe, doesn't really work
People need to know what to expect and when to expect it
It might start slow, but if you stick with it you can build something good

Nelly went from ~20% attendance to ~80% within a year, and now her company even provides lunch!

Might seem like a lot of effort, but it's probably not as much as you think

People will appreciate you making the effort, and they'll make an effort, too.

<a href="#nav">Back to top</a>

## Chinafy your apps + Lessons you can steal from China <a id="chinafy-your-apps">

Adam Cogan @AdamCogan

Rapidly changing environment. If you went to China in 2015 it's no longer relevant

WeChat pay or AliPay over credit card or cash. QR code scanning

Largest economy soon (2029)

Many companies have \$0 revenue in China, even big ones. Partly due to the firewall. Also because we don't understand the culture

Mostly mobile. Native apps. Web apps. WeChat official pages and mini apps

Sesame credit from AliPay, WeChat, PBOC (people's bank of China), etc.
Better interest rates
Paying bills on time
Based on your friends
Restricted travel
Is this the same thing as the social credit system?

Even the beggars have WeChat QR codes

How to succeed in China:

- use WeChat
- payments
- auth - phone/otp or social, not user/ pass
- QR code
- gamify
- Chinese name
- Chinese cloud
- local partners sales and support
- translation/localisation
- mini app
- UX - no minimalist design. Busier the better
-

<a href="#nav">Back to top</a>

##Using Flutter to develop cloud enabled mobile applications <a id="using-flutter-to-develop-cloud-enabled-mobile-applications"></a>

Nick Randolph and Pooja Bhaumik

Differential rendering (like React)

Easy to use with material design - components are available. Make your apps beautiful.

Everything is a widget, and it's all declarative

Dart has a .. chaining operator to... set multiple properties?

Hot reload is way better than xamarin or native Android and gradle

Visual studio app centre

<a href="#nav">Back to top</a>

## What's going on with Project Fugu? <a id="whats-going-on-with-project-fugu"></a>

Phil Nash @philnash

Chrome team.
Pushing the web forward -- parity with native apps

Previously we had vendor prefixes
Now we have feature flags

#enable-experimental-web-platform-features

Websites can request to join origin trial. That means you don't need users to opt in

---

The new stuff:
Web share API
No tracking. No JS, don't need to (and can't) track where they shared it or what platforms they use

Web share target API
Make your own pwa to share, maybe?
Chrome trial suggested it was ok, trying to convince Safari

Wake lock
Keeps the screen awake (or system, but it doesn't work yet)
Useful for non interactive sites, or sites that don't interact with button/links (e.g. motion)

Aborting requests
Abort Controller to cancel fetches

Contacts picker API
Could be useful for calling, emailing, sharing with contacts.
They can select from their Devices contacts

Native file system API
Window. Choose file system entries () // promise
Drag and drop files don't work on mobile. The "choose file" button is ugly

Shape detection API
Face detector, Text detector, Barcode detector
No mouth = no face, apparently
Get locations of different features and bounding box

It's all good for them to build it, but if we don't experiment, they won't find the edge cases or be able to make it better

<a href="#nav">Back to top</a>

## How to do in-app chaos testing <a id="how-to-do-in-app-chaos-testing"></a>

Wesley Cabus

Server in a suitcase in Rwanda. They go hours/days without internet because of Power outages. We were developing in an office with WiFi. They're so different

Airplane mode isn't an accurate simulation

Wrote a library called ruh roh. Wraps around a service and has random delays or random failures. Nugget package (prerelease)

Lets you cause exceptions from different services/methods based on whatever conditions you want so you can test what happens when stuff doesn't work.
Really useful for external dependencies

Can also slow things down

Change the data that is returned

<a href="#nav">Back to top</a>

## Bank Grade Security <a id="bank-grade-security"></a>

Kieran Jacobsen @kjacobsen

Hsts
Csp
security headers
Report uri

TLS
SSL labs
TLS 11 and 10 make security worse for everyone, to support a few

. well-known/security. Txt
Process, contacts, policies, etc

Keybase.io

<a href="#nav">Back to top</a>

## Beyond infrastructure as code DSLs <a id="beyond-infrastructure-as-code-dsls"></a>

Jake Ginnivan

Pulumi can use ts, python, go

Define resources in code.
Can publish and consume infra

Configuration in code, e.g. tests, feature flags, environment

Pulumi cli
Tracks state - what's actually deployed - uses some extra metadata, so it doesn't just query to find what's available

App.pulumi.com
"Enterprise" features like audit, policies, secret management

Can mix intra code and application code
E.g. S3 on created event handler => lambda

"We want devs to manage infra"
Input from ops. Make sure it's monitored, etc. Knowledge sharing
Feel like this will help build awareness
Allow team to evolve architecture, look at simplifying, reducing cost, etc

Pulumi crosswalk gives you some sensible defaults.
Pulumi is more configurable, but more effort, too

<a href="#nav">Back to top</a>

## Thousands of concurrent connections with Azure SignalR Service <a id="thousands-of-concurrent-connections-with-azure-signalr-service"></a>

Nelly Sattari @nelly_sattari
and Stafford Williams @staff0rd

Real-time functionality. Get updates as they happen

Well suited with event driven architecture

Used to use long polling. Connection is held open. Once data is available, response returned, connection closed
Once it's closed, another long poll request is opened

Then server push, but it's only one way

Web sockets allow bidirectional messages. Don't need to keep including headers, because the connection already exists, so less data

SignalR chooses the best connection based on client and server capabilities. Essentially, it abstracts that layer. Websockets -> server push -> long polling

50vms to 1 big VM ~250000 persistent connections
Scaling out means that each app service can only broadcast to it's own clients
So you need a backplane
Which means it needs to be stateful

Azure SignalR Service handles that for you. It's a proxy not a backplane
Persistent connections on the web server is now 0. They all go through the SignalR Service

Handles up to 100,000 connections (100 units) if you want to pay for it. That's per service

<a href="#nav">Back to top</a>
