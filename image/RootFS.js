module.exports= {
	"@context": require( "../prefixes"),
	"@graph": [{
		"@id": "ocii:Rootfs",
		"@type": [
			"rdfs:Class"
		],
		"rdfs:isDefinedBy": {
			"@id": "ocii:"
		},
		"rdfs:label": "RootFS",
		"rdfs:comment": "The rootfs key references the layer content addresses used by the image"
	},
	{
		"@id": "ocii:type",
		"@type": "http://www.w3.org/1999/02/22-rdf-syntax-ns#property",
		"rdfs:isDefinedBy": {
			"@id": "ocii:"
		},
		"rdfs:label": "type",
		"rdfs:comment": "a combined date and time at which the image was created.",
		"rdfs:domain": {
			"@id": "ocii:RootFS",
		},
		"rdfs:range": {
			"@id": "xsd:string"
		}
	},
	{
		"@id": "ocii:diff_ids",
		"@type": "http://www.w3.org/1999/02/22-rdf-syntax-ns#property",
		"@container": "list",
		"rdfs:isDefinedBy": {
			"@id": "ocii:"
		},
		"rdfs:label": "diff_ids",
		"rdfs:comment": "An array of layer content hashes (DifIDs), in order from first to last",
		"rdfs:domain": {
			"@id": "ocii:RootFS",
		},
		"rdfs:range": {
			"@id": "xsd:string"
		}
	}]
}
