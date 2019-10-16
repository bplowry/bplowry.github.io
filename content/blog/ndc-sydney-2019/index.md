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
<li><a href="#the-care-and-feeding-of-software-developers-keynote"><em>The care and feeding of software developers [Keynote]</em> by Heather Downing</a></li>
<li><a href="#kubernetes-0-to-100"><em>Kubernetes 0 to 100</em> by Scott Holden</a></li>
<li><a href="#modern-javascript-for-web-dinosaurs"><em>Modern JavaScript for web dinosaurs</em> by Scott Holden</a></li>
<li><a href="#lightning-talks-day-one"><em>Lightning talks (day one)</em></a></li>
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

# Kubernetes 0 to 100 <a id="kubernetes-0-to-100"></a>

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
