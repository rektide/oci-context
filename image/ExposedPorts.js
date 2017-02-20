module.exports= {
	"@context": require( "../prefixes"),
	"@graph": [{
		"@id": "ocii:ImageConfigExposedPorts",
		"@type": [
			"rdfs:Class"
		],
		"rdfs:isDefinedBy": {
			"@id": "ocii:"
		},
		"rdfs:label": "ImageConfigExposedPorts",
		"rdfs:comment": "A set of ports to expose from a container running this image."
	}]
}
