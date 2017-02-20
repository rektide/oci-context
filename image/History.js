module.exports= {
	"@context": require( "../prefixes"),
	"@graph": [{
		"@id": "ocii:History",
		"@type": [
			"rdfs:Class"
		],
		"@container": "list",
		"rdfs:isDefinedBy": {
			"@id": "ocii:"
		},
		"rdfs:label": "History",
		"rdfs:comment": "Describes the history of each layer."
	},
	{
		"@id": "ocii:History/created",
		"@type": "http://www.w3.org/1999/02/22-rdf-syntax-ns#Property",
		"rdfs:isDefinedBy": {
			"@id": "ocii:"
		},
		"rdfs:label": "created",
		"rdfs:comment": "A combined date and time at which the image was created.",
		"rdfs:domain": {
			"@id": "ocii:History",
		},
		"rdfs:range": {
			"@id": "xsd:dateTime"
		}
	},
	{
		"@id": "ocii:History/author",
		"@type": "http://www.w3.org/1999/02/22-rdf-syntax-ns#Property",
		"rdfs:isDefinedBy": {
			"@id": "ocii:"
		},
		"rdfs:label": "author",
		"rdfs:comment": "The author of the build point",
		"rdfs:domain": {
			"@id": "ocii:History",
		},
		"rdfs:range": {
			"@id": "xsd:string"
		}
	},
	{
		"@id": "ocii:History/created_by",
		"@type": "http://www.w3.org/1999/02/22-rdf-syntax-ns#Property",
		"rdfs:isDefinedBy": {
			"@id": "ocii:"
		},
		"rdfs:label": "created_by",
		"rdfs:comment": "The command which created the layer.",
		"rdfs:domain": {
			"@id": "ocii:Config",
		},
		"rdfs:range": {
			"@id": "xsd:string"
		}
	},
	{
		"@id": "ocii:History/comment",
		"@type": "http://www.w3.org/1999/02/22-rdf-syntax-ns#Property",
		"rdfs:isDefinedBy": {
			"@id": "ocii:"
		},
		"rdfs:label": "comment",
		"rdfs:comment": "A custom message set when creating the layer.",
		"rdfs:domain": {
			"@id": "ocii:Config",
		},
		"rdfs:range": {
			"@id": "xsd:string"
		}
	},
	{
		"@id": "ocii:History/empty_layer",
		"@type": "http://www.w3.org/1999/02/22-rdf-syntax-ns#Property",
		"rdfs:isDefinedBy": {
			"@id": "ocii:"
		},
		"rdfs:label": "empty_layer",
		"rdfs:comment": "This field is used to mark if the history item created a filesystem diff.",
		"rdfs:domain": {
			"@id": "ocii:Config",
		},
		"rdfs:range": {
			"@id": "xsd:boolean"
		}
	}]
}
