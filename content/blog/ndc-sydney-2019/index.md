---
title: NDC Sydney 2019
date: "2019-10-16T03:26:15.377Z"
description: "I had the chance to attend NDC Sydney for the first time. This is my first tech conference outside of Perth, and my first multi-day conference. I learned a bunch, so I wrote some of it down."
---

<span role="img" aria-label="Work in progress">👷 ‍️🚧 👷‍♂️</span> I'll be updating this post over the next few days, fleshing out my notes.

---

<nav>

- [The care and feeding of software developers](#the-care-and-feeding-of-software-developers) by Heather Downing

- [Kubernetes 0 to 100](#kubernetes-0-to-100) by Scott Holden

- [Modern JavaScript for web dinosaurs](#modern-javascript-for-web-dinosaurs) by Scott Holden

- [Am I a good developer?](#am-i-a-good-developer) by Emad Alashi

- [Have lunch and impact on your company!](#have-lunch-and-impact-on-your-company) by Nelly Sattari

- [Chinafy your apps + Lessons you can steal from China](#chinafy-your-apps) by Adam Cogan

- [Using Flutter to develop cloud enabled mobile applications](#using-flutter-to-develop-cloud-enabled-mobile-applications) by Nick Randolph and Pooja Bhaumik

- [What's going on with Project Fugu?](#whats-going-on-with-project-fugu) by Phil Nash

- [How to do in-app chaos testing](#how-to-do-in-app-chaos-testing) by Wesley Cabus

- [Bank Grade Security](#bank-grade-security) by Kieran Jacobsen

- [Beyond infrastructure as code DSLs](#beyond-infrastructure-as-code-dsls) by Jake Ginnivan

- [Thousands of concurrent connections with Azure SignalR Service](#thousands-of-concurrent-connections-with-azure-signalr-service) by Nelly Sattari and Stafford Williams

- [CSS Grid - What is this magic?!](#css-grid-what-is-this-magic) by Amy Kapernick

- [Commuting like a developer](#commuting-like-a-developer) by Anton Ball

</nav>

---

## <a id="the-care-and-feeding-of-software-developers"></a> The care and feeding of software developers

Heather Downing [@quorralyne](https://twitter.com/@quorralyne)

![](./the-care-and-feeding-of-software-developers.jpg)

The best leaders aren't "the best at tech"

Get away from what makes people like you (similar interests, background, etc.)
Go out of your way to find the people unlike you. Equal attention.

Leadership is a muscle, you need to exercise it.
Don't get comfortable.
You need to sacrifice for your team.

What developers want from leaders:

- safety (failure, support, belief)
- flexible and empathetic during personal challenges
- listen. They speak first
- respect. Differences
- encourage - "you got this"
- recognise - talk to them about their progress. Acknowledge their achievements, but also recognise their effort
- empower - let other people demonstrate their capability. Let them grow. Help them grow

Our differences make us a better team. People are not drop in and replace

You may need to support people at different levels.
Juniors need freedom to learn, make mistakes, and grow.
Mid-level need freedom to pair, share their knowledge, learn, make mistakes, and grow.
Seniors need freedom to experiment, try new ideas, pair, share, learn, make mistakes, and grow.
Noticing the pattern yet?

Your team will also have different personality types, and this may change as time goes by.
Optimists will help keep morale up -- "Everything is on fire, but hey, we're alive".
Pessimists will make sure we're not getting ahead of ourselves.
You probably need people who are bold, and visionary.
Sometimes people will be down-hearted; it's not going to be all the time, but it'll be _all_ of us, _some_ of the time.

How do you become the best leader?
Let them do their jobs?
Handle all the non-dev stuff for them.
Be mostly responsive and reachable.
Have regular (frequent and predictable) one-on-ones.
Value quality over quantity or velocity; let them do the best job they can.
Avoid task switching, if you can. Changing context from day-to-day,
or multiple times per day isn't always productive and can be overwhelming.
Be the shield.

You may need to be vulnerable:
Be prepared to give away control.
Emphasise that you're learning, too.
Let them fail and learn.
Remember that it's OK to not know.

The challenge?
Learn new tech, see how you can apply it.
You know, that's cool. But also
learn about leadership, because that's your future.
Whether you end up as team lead or senior dev:
leadership is part of your job.

[Back to top](#)

---

## <a id="kubernetes-0-to-100"></a> Kubernetes 0 to 100

Scott Holden [@sc_holden](https://twitter.com/@sc_holden)

To understand Kubernetes, you need to understand containers.

`container = code + runtime`

The main benefits of containerisation are in resource isolation.
Compared to a VM,
there's no OS -- and the OS is huge --
so you don't need to "carry" it around.

All the bits of containers have been around forever.
Docker put it all together and made it easy.

> **HOT TIP:** `docker run -d **--rm**` will clean up afterwards.

If you have multiple containers,
layers are shared, so we only have one copy of dependencies.

Scott went through an example of
creating a new image from an existing one "by hand".
That is, by opening a remote terminal with `docker exec bash`
and going to town, then publishing the new image.
But that's not the recommended approach.

Usually, you'd use a Dockerfile.
`FROM` is like starting the image.
`RUN` is the same as jumping in and editing.

Docker Desktop ships with Kubernetes.
You can turn it on and go.

Kubernetes is about container orchestration.
That includes:

- scheduling
- monitoring
- scaling
- deploying new versions
- configuration, and
- service discovery

Kubernetes talks to the container runtime.
It's not a container runtime itself.

![Kubernetes is a scheduler (in terms of running containers)](./kubernetes-0-to-100.jpg)

In order to manage your schedule your containers, Kubernetes needs master nodes and worker nodes.

The master node

- is probably actually a cluster of master nodes
- runs Kubernetes

Worker nodes

- some form of "compute"
- runs workloads
- container runtime lives here

A typical configuration might start with 3 master nodes and 5 worker nodes.

Kubernetes exists somewhere between
IaaS (Infrastructure as a Service) and
PaaS (Platform as a Service).
It depends where you sit.
(Self: doesn't that mean it's _both_?)

Managed Kubernetes service (e.g. Azure Kubernetes Service ... Google, AWS, Alicloud likely have equivalents)
can manage most of the infrastructure details.
You don't need to think about master nodes, you just need to configure them.

Next up was a look through the _nuts and bolts_ of k8s.

Pod (one or more containers)

- Single instance of the smallest component
- multi container - use for logging, monitoring, service mesh
- the pod is what scales. It all scales together
- by itself, is not resilient
- `kubectl apply` to create. `kubectl delete` to delete a pod

ReplicaSet

- ensures you anyways have N pods running

Deployment

- deploying a new version of a ReplicaSet
- it will spin up and spin down the new and old versions
- used if you want to update things
- failback is also available

Service

- lets you load balance in cloud, expose a port per node, etc.

Ingress

- expose HTTP endpoints for different services

**Extras:**
Autoscaling: but not for free, you'll need to configure it

Namespaces: provide logical separation, e.g. dev and test

Resource quotas

AKS (Azure Kubernetes Service) - free control plane - don't pay for the VMs, don't manage them, apart from some config

> **HOT TIP:** Use specific versions of dependencies so it spins up from cache. The `:latest` tag will always fetch from the registry, leading to slower startup.

I'd come in to this talk with a view that I'd never need Kubernetes.
My main takeaway was that Kubernetes doesn't mean you need huge complicated systems:
Restarting a single killed pod with a ReplicaSet is a useful feature.

[Back to top](#)

---

## <a id="modern-javascript-for-web-dinosaurs"></a> Modern JavaScript for web dinosaurs

Ryan Preece [@Preecington](https://twitter.com/@Preecington)

![](./modern-javascript-for-web-dinosaurs.jpg)

Web development has changed a lot in the past few years.

When Ryan last touched web development, jQuery was king. You'd download the file and put it on the web server with FTP. Simple.

Now we have
CLIs (command line interfaces),
transpilers,
packages and package managers,
bundlers,
NodeJS.
It's a lot more complicated.

The steps along the way:

- `<script src="scripts/jQuery.js" />`
  We added a reference to the file we'd downloaded and put on the web server
- `<script src="node_modules/jQuery/dist/jQuery.min.js" />`
  We could install dependencies with NPM
- `require("jQuery")`
  CommonJS came around and we could install dependencies using `require`
- 2011: The first bundlers started appearing. Browserify was the main player.
- 2015: Webpack comes along and quickly becomes the go-to (self: typical JavaScript)

Transpiling allows us to use syntax that isn't supported in older browsers, e.g. turning `async/await` code into `.then` and `.catch`.
Polyfills allow us to use functionality that isn't natively supported in older browsers, e.g. ensuring that `Promise` is available in the browser.
These allow us to write "modern" code, so we don't need to worry (as much) about browser differences.

Script runners make all those CLI commands easier.
First Grunt and Gulp, then NPM added `scripts`, so it's the standard.
The script runner lets you run "build" rather than "./node_modules/bin/webpack webpack.config.js --production" or something else complicated.

React, Vue, and Angular (the most-used web frameworks at time of writing) use all of these things under the hood.
They have CLI tools to create new projects following best practices.

[Back to top](#)

---

## <a id="am-i-a-good-developer"></a> Am I a Good Developer?

Emad Alashi [@EmadAshi](https://twitter.com/@EmadAshi)

Are you a good developer
We should understand one level below what we're working on

- in a human pyramid, you don't care about the bottom, only the layer you're standing on

Appetite to learn

[Back to top](#)

---

## <a id="have-lunch-and-impact-on-your-company"></a> Have lunch and impact on your company!

Nelly Sattari [@nelly_sattari](https://twitter.com/@nelly_sattari)

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

[Back to top](#)

---

## <a id="chinafy-your-apps"></a> Chinafy your apps + Lessons you can steal from China

Adam Cogan [@AdamCogan](https://twitter.com/@AdamCogan)

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

[Back to top](#)

---

## <a id="using-flutter-to-develop-cloud-enabled-mobile-applications"></a> Using Flutter to develop cloud enabled mobile applications

Nick Randolph [@thenickrandolph](https://twitter.com/@thenickrandolph)
and Pooja Bhaumik [@pblead26](https://twitter.com/@pblead26)

![](./using-flutter-to-develop-cloud-enabled-mobile-applications.jpg)

Differential rendering (like React)

Easy to use with material design - components are available. Make your apps beautiful.

Everything is a widget, and it's all declarative

Dart has a .. chaining operator to... set multiple properties?

Hot reload is way better than Xamarin or native Android and gradle

Visual studio app centre

[Back to top](#)

---

## <a id="whats-going-on-with-project-fugu"></a> What's going on with Project Fugu?

Phil Nash [@philnash](https://twitter.com/@philnash)

![](./whats-going-on-with-project-fugu.jpg)

Project Fugu is run by the Chrome team.
Pushing the web forward -- parity with native apps

Previously we had vendor prefixes
Now we have feature flags

`#enable-experimental-web-platform-features`

Websites can request to join origin trial. That means you don't need users to opt in

The new stuff:
Web share API
No tracking. No JS, don't need to (and can't) track where they shared it or what platforms they use

Web share target API
Make your own PWA to share, maybe?
Chrome origin trial suggested it was ok, trying to convince Safari

Wake lock
Keeps the screen awake (or system, but it doesn't work yet)
Useful for non interactive sites, or sites that don't interact with button/links (e.g. motion)

Aborting requests
Abort Controller to cancel fetches
not supported for all promises, but some do
(self: this also applies to WebAuthn methods)

Contacts picker API
Could be useful for calling, emailing, sharing with contacts.
They can select from their Devices contacts

Native file system API
`window.chooseFileSystemEntries() // returns a promise`
Drag and drop files don't work on mobile. The "Choose file" button is ugly.
This API gives access to the file system (with permission from the user)

Shape detection API
Face detector, Text detector, Barcode detector
No mouth = no face, apparently
Get locations of different features and bounding box

It's all good for them to build it, but if we don't experiment, they won't find the edge cases or be able to make it better

[Back to top](#)

---

## <a id="how-to-do-in-app-chaos-testing"></a> How to do in-app chaos testing

Wesley Cabus [@WesleyCabus](https://twitter.com/@WesleyCabus)

Server in a suitcase in Rwanda. They go hours/days without internet because of Power outages. We were developing in an office with WiFi. They're so different

Airplane mode isn't an accurate simulation

Wrote a library called ruh roh. Wraps around a service and has random delays or random failures. Nugget package (prerelease)

Lets you cause exceptions from different services/methods based on whatever conditions you want so you can test what happens when stuff doesn't work.
Really useful for external dependencies

Can also slow things down

Change the data that is returned

[Back to top](#)

---

## <a id="bank-grade-security"></a> Bank Grade Security

Kieran Jacobsen [@kjacobsen](https://twitter.com/@kjacobsen)

HSTS - pre-loading
CSP
securityheaders.com
Report-URI.org?

TLS
SSL labs.com
TLS 1.1 and 1.0 make security worse for everyone, to support a few.
1.0 is almost 20 years old.
We shouldn't need to support people on Windows XP

`.well-known/security.txt`
Process, contacts, policies, encryption (of the report), etc.

For easy message encryption, you can use [keybase.io](https://keybase.io)

[Back to top](#)

---

## <a id="beyond-infrastructure-as-code-dsls"></a> Beyond infrastructure as code DSLs

Jake Ginnivan [@JakeGinnivan](https://twitter.com/@JakeGinnivan)

<img src="./beyond-infrastructure-as-code-dsls.jpg">

Pulumi can use TypeScript, python, or Go

Define resources in code.
Can publish and consume infra

Configuration in code, e.g. tests, feature flags, environment

Pulumi CLI
Tracks state - what's actually deployed - uses some extra metadata, so it can't just query to find what's available

app.pulumi.com - managed service with
"enterprise" features like audit, policies, secret management

Can mix intra code and application code
e.g. S3 on created event handler => lambda

"We want devs to manage infra"
Input from ops. Make sure it's monitored, etc. Knowledge sharing
Feel like this will help build awareness
Allow team to evolve architecture, look at simplifying, reducing cost, etc

Pulumi crosswalk gives you some sensible defaults.
Pulumi is more configurable, but more effort, too

[Back to top](#)

---

## <a id="thousands-of-concurrent-connections-with-azure-signalr-service"></a> Thousands of concurrent connections with Azure SignalR Service

Nelly Sattari [@nelly_sattari](https://twitter.com/@nelly_sattari)
and Stafford Williams [@staff0rd](https://twitter.com/@staff0rd)

Real-time functionality. Get updates as they happen

Real-time apps are well-suited to event driven architecture.

Used to use long polling. Connection is held open. Once data is available, response returned, connection closed
Once it's closed, another long poll request is opened

Then came server push, but it's only one way

WebSockets allow bi-directional messages. Don't need to keep including headers, because the connection already exists, so less data

SignalR chooses the best connection based on client and server capabilities. Essentially, it abstracts that layer. WebSockets -> server push -> long polling

Stafford experimented with the limits of an Azure App Service,
but found around 750 concurrent connections -- even though they advertise "unlimited"
Tried changing the testing approach, ended up with
50 virtual machine clients connecting to 1 big server VM and got around 250,000 persistent connections

Scaling out means that each app service can only broadcast to it's own clients
So you need a backplane
Which means it needs to be stateful.
Compromises.

Azure SignalR Service handles that for you. It's a proxy not a backplane
Persistent connections on the web server is now 0. They all go through the SignalR Service

Handles up to 100,000 connections (100 units) if you want to pay for it. That's per service.

There was a cool demo with audience involvement - we played pong, did some yes/no polls, pressed a clicker
Demonstrated low-latency communication. Multiple concurrent updates, etc.

[Back to top](#)

---

## <a id="css-grid-what-is-this-magic"></a> CSS Grid - What is this magic?!

Amy Kapernick [@Amys_Kapers](https://twitter.com/@Amys_Kapers)

![](./css-grid-what-is-this-magic.jpg)

In the beginning there was darkness
Then HTML pages
Then tables for layout
Then floats and clear fix and all the container divs that come with that
Then flexbox allowed responsiveness across one axis
Then CSS grid opened up the other axis as well

So, now, we can use semantic HTML for the structure
and CSS for the layout. Like we should have been doing. No wrapper divs

`fr` unit is like flex basis.
Add up the numbers (1fr + 2fr = 3fr), and each element will grow proportionally to "their" `fr` (2fr twice as big as 1fr)

Minmax can help you deal with leftover space, e.g. when you don't know how many rows you need/columns

Grid + flex = 🎉

Browser support
CSS Grid ~91%
Flex box 98%
Sub grid 😬 Firefox 71 (as yet unreleased)

[Back to top](#)

---

## <a id="commuting-like-a-developer"></a> Commuting like a developer

Anton Ball [@antonjb](https://twitter.com/@antonjb)

![](./commuting-like-a-developer.jpg)

Commuting

69% of Aussies drive to work. It's boring and "mindless". His many times have you arrived and not really been aware of how it happened

The average commuter spends about 4.5 hours per week commuting.

Stress, poor sleep.

There are many ways we commute. Anton showed a few wild examples
a Perth unicyclist
a Sydney Harbour swimmer
... but more conventional options are available

So he ran an experiment.
Like all good experiments, he needed some rules:
Consistent timing (door to desk)
No work or email on the commute
Nothing infinite scrolling (e.g. Twitter, Facebook)

Using an electric assisted bike (cheating) meant he didn't get as sweaty, so didn't need to change at either end.

Anton considered the time and cost for driving, cycling, and public transport.

You can probably guess that the car was the fastest mode,
and cycling was the cheapest.
Most investigations stop there, but Anton wanted to go deeper.

A few notable pieces:

- you can use the commute to learn (all modes allowed listening to podcasts),
  but reading was restricted to public transport.
  When driving or cycling, you need to look where you're going,
  and your hands are occupied. On a bus, you just need to keep an eye out for your stop.
- use the trip to plan your day, or separate work from home.
- cycling was more vigorous exercise, and for longer,
  but public transport had some walking, which was better than driving, at least.
- Driving was awful for mental health. It's stressful, there's road rage.
  The other modes allow stopping and looking around. Being in your body.
- Bike paths often go through parks, and are usually nicer to look at than roads.

And the results?

| Category                    | Driving | Cycling | Public transport |
| --------------------------- | ------- | ------- | ---------------- |
| Time                        | 🏆      |         |                  |
| Cost                        |         | 🏆      |                  |
| Free time                   |         |         | 🏆               |
| Health                      |         | 🏆      |                  |
| Mental health               |         | 🏆      | 🏆               |
| View                        |         | 🏆      |                  |
| Environment                 |         | 🏆      | 🏆               |
| Safety (no judgements made) |         |         |                  |

So what does Anton do now? (Mostly) cycling or public transport.

What's next?
Automation. Less reliance on cars. Car sharing
Being able to reduce infrastructure for cars (e.g. parking lots)
could free up money for better infrastructure for other modes, or, you know, parks.

The challenge:

- Give it a try
- See how you can improve your commute
- Find the joy in your journey

[Back to top](#)

So that's NDC Sydney! I learned a lot, had a ball, and hope to be back in the future!
