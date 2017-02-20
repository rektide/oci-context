module.exports= {
	"@context": require( "../prefixes"),
	"@graph": [{
		"@id": "ocii:ImageConfigVolumes",
		"@type": [
			"rdfs:Class"
		],
		"rdfs:isDefinedBy": {
			"@id": "ocii:"
		},
		"rdfs:label": "ImageConfigVolumes",
		"rdfs:comment": "A set of directories which should be created as data volumes in a container running this image.",
	}]
}
