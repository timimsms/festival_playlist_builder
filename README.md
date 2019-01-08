# Festival Playlist Builder

Small Ruby on Rails personal project to make building playlists for music festivals a more engaging and enjoyable experience.

## Development

TODO - add how to setup, install, and work on this project locally.

## Overview

### Problem Statement

Major music festivals regularly release a lineup, feature dozens of amazing and up-and-coming artists, but rarely do they release a comprehensive playlist for **all** of the artists at the festival.

### Current Solution

Currently, I manually build multiple playlists for each festival on Spotify:

- The initial release of artists (by day, without schedule) kicks off the process.
- I will typically build a "Top 5", "Top 10", and "Extensive" playlist.
  - **Top 5** - the five most popular songs by the artist OR the five featured songs (usually for new releases).
  - **Top 10** - the ten most popular songs by the artist.
  - **Extensive** - pretty much every song I can find for the artists.
  - *By Day* - a per-day playlist highlighting those artists listed to perform on a given day.
- From these playlists I'll start getting a sense of who I am interested in at each festival. I usually have a handful of artists I know, and heavily research/listen to the rest.
- Once the official schedule comes out, I'll build a final playlist based on the lineup I'm going to see.
- If I attend the festival, I'll usually create a final playlist featuring the artists I saw.
- If I don't attend but stream the festival instead, I'll create a new playlist featuring the artists which were focal in the stream.

This provides me with a good set of playlists both before and after the music fest.

### Project Milestones

- [ ] User accounts and Spotify OAuth to allow for the resulting playlist to be added to the user's account.
- [ ] Basic ability to utilize Ruby and the [RSpotify](https://github.com/guilhermesad/rspotify) Gem to aid in the creation of festival playlists.
- [ ] More complex user experience and interface to allow for selection of artists and songs.
- [ ] Basic interface to allow "building" a playlist with user decision-making throughout the process.
- [ ] Advanced interface to allow for gradual listening to lead to new discoveries and suggestions.

### Project Goals

- Better, more stream-lined, and more engaging user-experience related to building music festival playlists.
- Utilize MaterialUI and React components in a personal project.
- Experiment with unique user experiences catered to discovery, learning, and listening to music.
- Allow exploration of new building experiences; ideally with a focus on listening and then adding based on experience.

### Examples

- **Lollapalooza (2013)**
  - By Day
    - [Friday - 08/02/2013](https://open.spotify.com/user/1224479068/playlist/3nsAH43v7URz5rNjhe2ffh?si=caXVeaNHTv-Ur4oEgcOZ_g)
    - [Saturday - 08/03/2013](https://open.spotify.com/user/1224479068/playlist/14O0hWOMQAkGz40NqyHlil?si=NxzTxuZqR5Sb3vRVsJWmeA)
    - [Sunday - 08/04/2013](https://open.spotify.com/user/1224479068/playlist/6G8nt9bCeFohYI7jlm3URM?si=i_fXqEtiSXGLUr-4owgmdQ)
  - Final Lists
    - [#lolla13](https://open.spotify.com/user/1224479068/playlist/5WDhCCi2YnmtxyAf0k6piR?si=G1gy-tSkREaiOy-AvaX-HA)
    - [Lollapalooza! '13 (Full)'](https://open.spotify.com/user/1224479068/playlist/3pGygjR8p2430sfyyyY8lA?si=MwBj9azyStytsAE_-Nw_SQ)
- **Coachella (2015)**
  - By Day
    - [#coachella.day1](https://open.spotify.com/user/1224479068/playlist/7rAb4VFnI0p4lYZO9XPOyo?si=w9w4z-abR0CrwiYfX1wPyA)
    - [#coachella.day2](https://open.spotify.com/user/1224479068/playlist/1HSr1kDhDZBOGq06QdA4Rx?si=9WmL3aINRFSa7Ie0VghJmw)
    - [#coachella.day3](https://open.spotify.com/user/1224479068/playlist/3h0xW3Cc5Q5oGleIGcwEQd?si=5RXZnpf2RsKJHibPPkCIfg)
  - Final Playlists
    - [#coachella15](https://open.spotify.com/user/1224479068/playlist/2dVMfxGj3g123KNEGR1TM3?si=kA3a0Jm7RlqM7wkkajuZ_g)
    - [#coachella15++](https://open.spotify.com/user/1224479068/playlist/3meIHmwczreJmPRU3aeLP8?si=zEoHg1LjTk6caCsZ9DWYKQ)
- **Coachella (2016)**
  - By Day
    - [Friday (4/22)](https://open.spotify.com/user/1224479068/playlist/50JMbAHuavPzUWEYw8AARw?si=lJdfehPERQajInpAnGdE8g)
    - [Saturday (4/23)](https://open.spotify.com/user/1224479068/playlist/7lw3QhVAhWtqVsLS3zDof0?si=rZPKnM_sS5-b3gntJAGJDA)
    - [Sunday (4/24)](https://open.spotify.com/user/1224479068/playlist/0LdEaKbNMmYQd6QtyH6LVN?si=7_bSfMDvTK6f7ZRxhenprw)
  - Final Playlists
    - [Coachella Discovery Playlist](https://open.spotify.com/user/1224479068/playlist/04sX2alHBQruou5IbpI7Er?si=RoQVMf6rSVWp2tCNpae8kA) - before / leading up to the festival research.
    - [Coachella Weekend II Artists](https://open.spotify.com/user/1224479068/playlist/26W085RdrUad0poa7nUZth?si=F7a8oo-XQiCIJK-bqHJ60Q) - who I saw Weekend 2.
    - [Coachella Weekend II Artists - B Sides](https://open.spotify.com/user/1224479068/playlist/2e6JaKAnyqcTxMMBMR4Ahc?si=aVX5uBBCS-q2DbbNIAYayg) - the artists I did not see but wanted to checkout afterwards.
- **Coachella (2017)**
  - By Day
    - [Friday (4/14)](https://open.spotify.com/user/1224479068/playlist/10G1dPjRcXJ3PKSFjF7Xjk?si=Y3Eqbiu3TV6Vk411lEdNCQ)
    - [Saturday (4/15)](https://open.spotify.com/user/1224479068/playlist/7ppLRhYwjcazWzWy23JJLC?si=dhFAjcjNTjK5kcP5BSftqg)
    - [Sunday (4/16)](https://open.spotify.com/user/1224479068/playlist/2pwHPQeYzqhY3YdjiUmqEK?si=XSt0SqbMTv-hARQ__F-URQ)
  - Final Playlists
    - [#coachella17](https://open.spotify.com/user/1224479068/playlist/3Rh6PTif85w0fA2zXRTeiG?si=O5flPFGvR-mqv7f-ao46sQ)
- **Coachella (2018)**
  - Lineup
    - [Lineup - Top 5's](https://open.spotify.com/user/1224479068/playlist/198FFfkeQbiz8TYE062vjd?si=7X4GDPjeRDqxdtMJoUVEKA)
    - [Lineup - Top 10's](https://open.spotify.com/user/1224479068/playlist/1vh2XzolsjJ0nn6tqiP1Ly?si=PqM_RW7zQr-PKtQ0i2Vc4Q)
    - [Lineup (Extensive)](https://open.spotify.com/user/1224479068/playlist/18NNlnYEcskJfCxqn5j5qY?si=TyfEDKA1TsWveOg_WxyaKw)
  - By Day (Pre-schedule)
    - [Friday (4/20)](https://open.spotify.com/user/1224479068/playlist/67VyLyuyne8NeXMGmCB4EV?si=iKel9IR9SvawIyU9aPiS4Q)
    - [Saturday (4/21)](https://open.spotify.com/user/1224479068/playlist/2QcLqZvfRyASKwPtaXgymm?si=B0AFGJywTWGs_vRTht9jFw)
    - [Sunday (4/22)](https://open.spotify.com/user/1224479068/playlist/2amPeotudhBWTHLm0t88EY?si=8be4CN7nSliECbIyuPLdBg)
  - By Day (Post-schedule)
    - [Picks - Friday (4/20)](https://open.spotify.com/user/1224479068/playlist/5NKSR8o09cFQ5wPr3JWfV8?si=3wAhXoSaTbOs-ofl5aPmWA)
    - [Picks - Saturday (4/21)](https://open.spotify.com/user/1224479068/playlist/1lrAMFvieV90bdQoLJmKa7?si=aUhY0sYeSQSZDllxeV5v3Q)
    - [Picks - Sunday (4/22)](https://open.spotify.com/user/1224479068/playlist/4evbZ17N1A8u2T2WjAkIoc?si=gls_7pDoRzW0wtLe1WJXSQ)
  - Final Playlists
    - [#coach18](https://open.spotify.com/user/1224479068/playlist/5E1nbvWiG7l7yoBcJt7uKB?si=eAHhtsBASHuWzQ61DMDc3g)
    - [#coachella18](https://open.spotify.com/user/1224479068/playlist/3X5UWAAUjfgXA4HbAVdMUE?si=4QsKXV-zRPeDs-Lb4EYbdQ)
    - [#coachella18-livestream](https://open.spotify.com/user/1224479068/playlist/2E7UeWW9aZ3l8K0MlNLn4t?si=0HIBxF3kSRW9OVh0-JpCvA)
- **Voodoo (2018)**
  - Lineup
    - [Voodoo '18 - Artists (Extensive)](https://open.spotify.com/user/1224479068/playlist/0IBTvrfRRnK4deJt4mbYer?si=nn3waWKCRiaJq_LxCKNmyQ)
    - [Voodoo '18 - Artists (Top 10's)](https://open.spotify.com/user/1224479068/playlist/4ZKEaejfp6HwUuMtLNZeQ4?si=TV5BG6jlTsKg0XlX3DmfjQ)
    - [Voodoo '18 - Artists (Top 5's)](https://open.spotify.com/user/1224479068/playlist/1q2UJISYdtoQ3btnZWbLAw?si=-IeFgZZ9RGO4IFY5WUaiEw)
  - By Day
    - [Friday (10/26)](https://open.spotify.com/user/1224479068/playlist/38nPCal0neuuSxfoRlkj91?si=fjdbpzJMSdW3sQ0LyJYW7A)
    - [Saturday (10/27)](https://open.spotify.com/user/1224479068/playlist/0Y1qJP1Gc2sGLPSm1Dsqox?si=AgI8qBpTQnqw_SwE-_yT_A)
    - [Sunday (10/28)](https://open.spotify.com/user/1224479068/playlist/2xWpkbNHyclfP9pXaV0x3T?si=Cq85KXt3R06qrWMnNdgRKA)
  - Final Playlists
    - [#voodoo18 ⚛️](https://open.spotify.com/user/1224479068/playlist/5XUNe342UbGVPvZcwqnGJF?si=KbrDgaRYRQmBFLRa_hk7eQ) - research leading up to the festival.
    - [#voodoo18 💀](https://open.spotify.com/user/1224479068/playlist/3uGGAZE3al7hS1wNnJDn9l?si=uY6mOcSSTgC8KR6ik93eig) - final selections based on lineup.
    - [#voodoo18](https://open.spotify.com/user/1224479068/playlist/3zygcqqOO1NKXAG0MltiyT?si=6LhYBnn6T76wy-gP3X64xA) - post-festival playlist heavily inspired by the artists I saw.
