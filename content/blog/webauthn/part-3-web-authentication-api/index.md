---
title: "The Web Authentication API"
date: "2019-12-22T05:38:00.000Z"
description: "There is a growing movement towards removing passwords and providing alternatives.
Some of these are being enabled in browsers through the Web Authentication API,
which we will explore in the third post in a series on WebAuthn."
---

Other posts in this series:

- [Forget your passwords with the Web Authentication API](../part-1-forget-your-passwords)
- [The problem with passwords](../part-2-the-problem-with-passwords)
- [Making auth better](../part-4-making-auth-better)

---

In the previous post, we explored some problems with passwords.
There is a growing movement towards removing passwords and providing alternatives.
Some of these are being enabled in browsers through the Web Authentication API.

## What is WebAuthn?

WebAuthn is a specification in the <abbr title="World Wide Web Consortium">W3C</abbr>.
The primary contributors are Mozilla, Microsoft, Google, FIDO Alliance and the W3C.

It defines a standard by which browsers can get assertions from authenticators,
and how web servers can validate those assertions.
It also defines a JavaScript API for web applications to request credentials from the browser.

The Web Authentication API, combined with the Client-to-Authenticator Protocol (CTAP),
make up the FIDO2 protocol.

## How does it work?

Using a device called an authenticator

- a separate device, known as an external, cross-platform or roaming authenticator
- built in to a phone or laptop, known as an internal, platform or bound authenticator

What gets sent from the server to your device

- a "challenge" for the authenticator to sign using its private key
- (optionally) more configuration options for the authentication process

What gets sent from your device to the server

- for registering credentials:
  - credential ID
  - public key
  - signed challenge (for server to verify using the public key)
  - website information (origin and an identifier)
  - authenticator type
  - attestation statement (details about the authenticator)
- for getting credentials
  - credential ID
  - signed challenge
  - website information (origin and an identifier)
  - details about authentication (e.g. whether "user verification" happened)

You may have noticed that we never send anything secret like a password or personally identifiable.

 <img src="../no-secrets.png" alt="" role="presentation">

The authenticator can store credential information for each login you'd like to use

- website identifier
- user identifier
- credential identifier

<!-- Some authenticators store the _actual_ private key for the credential source,
in this case they are referred to as **resident keys**, because they are resident on the authenticator.
Authenticators that support resident keys can only store a limited number -- because they have to physically store something, and storage is limited. The Yubikey 5C, for example, can store 25 resident keys.

Authenticators can hold an unlimited number of **non-resident keys** -- because nothing is stored on the device.
That might sound strange, but this actually works by encrypting the _credential_ private key using the private key baked in to the _device_ during manufacturing, and sending that to the client (browser, app, etc) as the credential ID.
That means when the application requests an assertion for any particular credential ID, the authenticator first has to decrypt the credential ID to get the private key, so that it can sign the authenticatorData.
As a consequence, non-resident keys cannot be used for usernameless scenarios, which we'll go into a bit further later on. -->

## Can I use it?

In a word, yes. Read on if you want more detail 😆

<a href="http://caniuse.com">Can I Use</a> allows you to import data from your country,
and also has a "usage relative" option, which can help narrow down to your targeted users,
or you can import actual data for your users from Google Analytics.

<script src="https://cdn.jsdelivr.net/gh/ireade/caniuse-embed/caniuse-embed.min.js"></script>
<p class="ciu_embed" data-feature="webauthn" data-periods="future_1,current,past_1" data-accessible-colours="false">
  <a href="http://caniuse.com/#feat=webauthn">
    <picture>
      <source type="image/webp" srcset="https://res.cloudinary.com/ireaderinokun/image/upload/v1569250922/caniuse-embed/webauthn-2019-9-23.webp">
      <source type="image/png" srcset="https://res.cloudinary.com/ireaderinokun/image/upload/v1569250922/caniuse-embed/webauthn-2019-9-23.png">
      <source type="image/jpeg" srcset="https://res.cloudinary.com/ireaderinokun/image/upload/v1569250922/caniuse-embed/webauthn-2019-9-23.jpg">
      <img src="https://res.cloudinary.com/ireaderinokun/image/upload/v1569250922/caniuse-embed/webauthn-2019-9-23.png" alt="Data on support for the webauthn feature across the major browsers from caniuse.com">
    </picture>
  </a>
</p>

At time of writing, it is supported in Chrome, Firefox, Edge and Safari (macOS),
and not supported on Safari (or any other browser) on iOS.
**UPDATE: 22/12/2019: Safari iOS 13.2 has support behind a feature flag, and 13.3 is enabled by default**

Whether someone can actually use WebAuthn depends on
if they have an external authenticator
or if their phone/computer can act as an authenticator.

I don't have numbers, but I'm going to guess that a very small minority own authenticator devices like a Yubikey.

It's more likely that someone will have a phone/computer that is capable:

- ✅ Android phone from Android 7 and above ([~58% of Android phones](https://developer.android.com/about/dashboards?hl=en))
- ✅ Windows 10 device capable of Windows Hello -- <span role="img" alt="Note">ℹ</span> some devices are capable of using Windows Hello with a PIN, so you may not need a computer with a fingerprint scanner or an infra-red camera.
- ✅ macOS device with Face ID or Touch ID
- ❌ unfortunately, it's not supported on iOS yet. **UPDATE 22/12/2019: Coming soon! experimental in iOS 13.2 and enabled in iOS 13.3**

The lack of support on some devices doesn't need to hold you back, though. You can detect support in the browser and provide different experiences for users on devices without those capabilities, without taking anything away.

## How do I use the JavaScript API?

The JavaScript API only has a few methods.

```js
// feature detection for WebAuthn
window.PublicKeyCredential

// detection for platform/on-device authenticator
await window.PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable()

// registration of authenticator
await window.navigator.credentials.create(options)

// authenticate with authenticator
await window.navigator.credentials.get(options)
```

If you're wondering about those `options` parameters,
<a href="https://webauthn.guide/">webauthn.guide by Duo</a> does a much better job explaining them than I would.

In the next post, we'll look at how the user experience changes,
and how you might start enabling this for your users.
