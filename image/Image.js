module.exports= {
	"@context": require( "../prefixes"),
	"@graph": [{
		"@id": "ocii:Image",
		"@type": [
			"rdfs:Class"
		],
		"rdfs:isDefinedBy": {
			"@id": "ocii:"
		},
		"rdfs:label": "Image",
		"rdfs:comment": "An OCI Image is an ordered collection of root filesystem changes and the corresponding execution parameters for use within a container runtime.",
		"xmime:contentType": "application/vnd.oci.image.config.v1+json"
	},
	{
		"@id": "ocii:created",
		"@type": "http://www.w3.org/1999/02/22-rdf-syntax-ns#property",
		"rdfs:isdefinedby": {
			"@id": "ocii:"
		},
		"rdfs:label": "created",
		"rdfs:comment": "a combined date and time at which the image was created.",
		"rdfs:domain": {
			"@id": "ocii:image",
		},
		"rdfs:range": {
			"@id": "xsd:datetime"
		}
	},
	{
		"@id": "ocii:author",
		"@type": "http://www.w3.org/1999/02/22-rdf-syntax-ns#Property",
		"rdfs:isDefinedBy": {
			"@id": "ocii:"
		},
		"rdfs:label": "author",
		"rdfs:comment": "Gives the name and/or email address of the person or entity whic hcrated and is responsible for maintaining the image",
		"rdfs:domain": {
			"@id": "ocii:Image",
		},
		"rdfs:range": {
			"@id": "xsd:string"
		}
	},
	{
		"@id": "ocii:architecture",
		"@type": "http://www.w3.org/1999/02/22-rdf-syntax-ns#Property",
		"rdfs:isDefinedBy": {
			"@id": "ocii:"
		},
		"rdfs:label": "architecture",
		"rdfs:comment": "The CPU architecture which the binaries in this image are built to run on.",
		"rdfs:domain": {
			"@id": "ocii:Image",
		},
		"rdfs:range": {
			"@id": "xsd:string"
		}
	},
	{
		"@id": "ocii:os",
		"@type": "http://www.w3.org/1999/02/22-rdf-syntax-ns#Property",
		"rdfs:isDefinedBy": {
			"@id": "ocii:"
		},
		"rdfs:label": "os",
		"rdfs:comment": "The name of the operating system which the image is built to run on.",
		"rdfs:domain": {
			"@id": "ocii:Image",
		},
		"rdfs:range": {
			"@id": "xsd:string"
		}
	},
	{
		"@id": "ocii:config",
		"@type": "http://www.w3.org/1999/02/22-rdf-syntax-ns#Property",
		"rdfs:isDefinedBy": {
			"@id": "ocii:"
		},
		"rdfs:label": "config",
		"rdfs:comment": "The execution parameters which should be used as a base when running a container using the image.",
		"rdfs:domain": {
			"@id": "ocii:Image",
		},
		"rdfs:range": {
			"@id": "ocii:ImageConfig"
		}
	},
	{
		"@id": "ocii:rootfs",
		"@type": "http://www.w3.org/1999/02/22-rdf-syntax-ns#Property",
		"rdfs:isDefinedBy": {
			"@id": "ocii:"
		},
		"rdfs:label": "rootfs",
		"rdfs:comment": "The rootfs key references the layer content addresses used by the image.",
		"rdfs:domain": {
			"@id": "ocii:Image",
		},
		"rdfs:range": {
			"@id": "ocii:RootFS"
		}
	},
	{
		"@id": "ocii:history",
		"@type": "http://www.w3.org/1999/02/22-rdf-syntax-ns#Property",
		"rdfs:isDefinedBy": {
			"@id": "ocii:"
		},
		"rdfs:label": "history",
		"rdfs:comment": "Describes the history of each layer. The array is ordered from first to last.",
		"rdfs:domain": {
			"@id": "ocii:Image",
		},
		"rdfs:range": {
			"@id": "ocii:History"
		}
	}]
}
	
