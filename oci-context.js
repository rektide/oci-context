#!/usr/bin/env node
"use strict"

var
  prefixes= require( "./prefixes"),
  ExposedPorts= require( "./image/ExposedPorts")["@graph"],
  History= require( "./image/History")["@graph"],
  Image= require( "./image/Image")["@graph"],
  ImageConfig= require( "./image/ImageConfig")["@graph"],
  Labels= require( "./image/Labels")["@graph"],
  RootFS= require( "./image/RootFS")["@graph"],
  Volumes= require( "./image/Volumes")["@graph"]

module.exports= {
	"@context": prefixes,
	"@graph": [].concat(
		Image,
		// Image entries:
		ImageConfig,
		RootFS,
		History,
		// ImageConfig entries
		ExposedPorts,
		Volumes,
		Labels
	)
}
if( require.main=== module){
	console.log( JSON.stringify( module.exports, null, "\t"))
}
