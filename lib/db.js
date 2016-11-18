'use strict';

var firebase = require('firebase');
var app = firebase.initializeApp({
  apiKey: "AIzaSyAWKaeVvchZ_vTEc5cSZ4puxGGd2Jc5zEM",
  authDomain: "team11-7e31e.firebaseapp.com",
  databaseURL: "https://team11-7e31e.firebaseio.com",
  storageBucket: "team11-7e31e.appspot.com",
  messagingSenderId: "831148825598"
});
var crypto = require('crypto')
const url = require('url')
var database = firebase.database()

function insertCitation(originUrlString, citeUrlString, text, supporting) {
  // Parse the orgin URL
  var originUrl = url.parse(originUrlString)

  // Insert the citation into the db
  dbRefForUrl(originUrl).push().set({
    text: text,
    citeUrl: citeUrlString,
    supporting: supporting
  })
  console.log("Inserted citation");
}

function retrieveCitations(originUrlString) {
  // Parse the orgin URL
  var originUrl = url.parse(originUrlString)

  //Get the citations from the db
  return dbRefForUrl(originUrl).once('value').then(function(snap) {
    return snap.val()
  })
}

function hash(data) {
  //return crypto.createHash('md5').update(data).digest('hex')
  // Don't bother hashing this for now
  return data
}

function dbRefForUrl(url) {
  // Hash host and path
  var siteKey = hash(url.host)
  var pathKey = url.path == undefined ? '_' : hash(url.path)

  return database.ref('citations/' + siteKey + '/' + pathKey)
}

module.exports = {
  insertCitation: insertCitation,
  retrieveCitations: retrieveCitations
}
