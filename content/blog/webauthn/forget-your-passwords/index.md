---
title: Forget your passwords with the Web Authentication API
date: "2019-11-04T13:57:22.942Z"
description: "<p>
There are plenty of problems with passwords:
we forget them,
we re-use them,
and we make them too easy to guess.
There's light on the horizon, though.
The Web Authentication API (WebAuthn) could spell the end of passwords on the internet.
</p><p>
By delegating responsibility for authentication to your device,
websites using WebAuthn won't need to ask you for your password,
so it can never be stolen from you,
and nobody else can get into your accounts.
</p><p>
Read more for an introduction to your new #passwordless life
</p>"
---

Passwords are hard.
Data breaches frequently expose poor security practices,
proving that, as an industry, we're not very good at this.
As developers have become more aware of these challenges,
we've tried to offload password management to "the big guns",
making our lives easier, but what about our users?
From confusing or ineffective password complexity restrictions
to password fields you can't paste into,
it's no wonder so many people find one password and stick with it.

The Web Authentication API (WebAuthn)
allows you to build passwordless authentication or two factor authentication
into your web applications seamlessly in the browser.
Using an asymmetric key pair where the public key is sent to a server,
and the private key stored securely on your device,
your secrets are never sent over the internet,
greatly reducing the risk of phishing attempts.

This blog series will provide an introduction to WebAuthn,
outlining the benefits, trade-offs, and future of this new authentication protocol.
Through this series
you will see how to build an experience that puts control over their credentials (literally) back into the hands of your users.

---

A large portion of this series was covered in my <a href="https://youtu.be/poJt8dZH9qE">presentation at DDD Perth (35&nbsp;minutes)</a>. You can also check out the [slides and resources](https://speakerdeck.com/bplowry/forget-your-passwords-with-the-web-authentication-api).

<iframe width="560" height="315" src="https://www.youtube.com/embed/poJt8dZH9qE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</aside>

<!-- ---

### Posts in the series

- The problem with passwords
- The Web Authentication API
- Making auth better for users -->
