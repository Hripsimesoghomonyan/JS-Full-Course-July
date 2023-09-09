"use strict";

function Song(title, artist) {
  this.title = title;
  this.artist = artist;
  this.isPlaying = false;
}

Song.prototype.play = function() {
  this.isPlaying = true;
  console.log(`${this.title} by ${this.artist} started to play`);
};

Song.prototype.stop = function() {
  this.isPlaying = false;
  console.log(`${this.title} by ${this.artist} stopped`);
};

function Playlist() {
  this.songs = [];
  this.currentSongIndex = 0;
}

Playlist.prototype.add = function(song) {
  this.songs.push(song);
};

Playlist.prototype.play = function() {
  const currentSong = this.songs[this.currentSongIndex];
  if (currentSong) {
    currentSong.play();
  }
};

Playlist.prototype.stop = function() {
  const currentSong = this.songs[this.currentSongIndex];
  if (currentSong) {
    currentSong.stop();
  }
};

Playlist.prototype.next = function() {
  this.stop();
  this.currentSongIndex = (this.currentSongIndex + 1) % this.songs.length;
  this.play();
};

const playlist = new Playlist();
const heyJude = new Song("Hey Jude", "The Beatles");
const jaded = new Song("Jaded", "Aerosmith");
playlist.add(heyJude);
playlist.add(jaded);


playlist.play();
playlist.next();
playlist.next();
playlist.stop();
playlist.play();
