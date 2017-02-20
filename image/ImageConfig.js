module.exports= {
	"@context": require( "../prefixes"),
	"@graph": [{
		"@id": "ocii:ImageConfig",
		"@type": [
			"rdfs:Class"
		],
		"rdfs:isDefinedBy": {
			"@id": "ocii:"
		},
		"rdfs:label": "ImageConfig",
		"rdfs:comment": "The execution parameters which should be used as a base when running a container using the image. "
	},
	{
		"@id": "ocii:User",
		"@type": "http://www.w3.org/1999/02/22-rdf-syntax-ns#Property",
		"rdfs:isDefinedBy": {
			"@id": "ocii:"
		},
		"rdfs:label": "User",
		"rdfs:comment": "The username or UID which is a platform-specific structure that allows specific control over which user the process run as.",
		"rdfs:domain": {
			"@id": "ocii:ImageConfig",
		},
		"rdfs:range": {
			"@id": "xsd:string"
		}
	},
	{
		"@id": "ocii:ExposedPorts",
		"@type": "http://www.w3.org/1999/02/22-rdf-syntax-ns#Property",
		"rdfs:isDefinedBy": {
			"@id": "ocii:"
		},
		"rdfs:label": "ExposedPorts",
		"rdfs:comment": "A set of ports to expose from a container running this image.",
		"rdfs:domain": {
			"@id": "ocii:ImageConfig",
		},
		"rdfs:range": {
			"@id": "oci:ImageConfigExposedPorts"
		}
	},
	{
		"@id": "ocii:Env",
		"@type": "http://www.w3.org/1999/02/22-rdf-syntax-ns#Property",
		"@container": "list",
		"rdfs:isDefinedBy": {
			"@id": "ocii:"
		},
		"rdfs:label": "Env",
		"rdfs:comment": "Entries are in the format of VARNAME=\"var value\"",
		"rdfs:domain": {
			"@id": "ocii:ImageConfig",
		},
		"rdfs:range": {
			"@id": "xsd:string"
		}
	},
	{
		"@id": "ocii:Entrypoint",
		"@type": "http://www.w3.org/1999/02/22-rdf-syntax-ns#Property",
		"@container": "list",
		"rdfs:isDefinedBy": {
			"@id": "ocii:"
		},
		"rdfs:label": "Entrypoint",
		"rdfs:comment": "A list of arguments to use as the command to execute when the container starts.",
		"rdfs:domain": {
			"@id": "ocii:ImageConfig",
		},
		"rdfs:range": {
			"@id": "xsd:string"
		}
	},
	{
		"@id": "ocii:Cmd",
		"@type": "http://www.w3.org/1999/02/22-rdf-syntax-ns#Property",
		"@container": "list",
		"rdfs:isDefinedBy": {
			"@id": "ocii:"
		},
		"rdfs:label": "Cmd",
		"rdfs:comment": "Default arguments to the entrypoint of the container.",
		"rdfs:domain": {
			"@id": "ocii:ImageConfig",
		},
		"rdfs:range": {
			"@id": "xsd:string"
		}
	},
	{
		"@id": "ocii:Volumes",
		"@type": "http://www.w3.org/1999/02/22-rdf-syntax-ns#Property",
		"rdfs:isDefinedBy": {
			"@id": "ocii:"
		},
		"rdfs:label": "Volumes",
		"rdfs:comment": "A set of directories which should be created as data volumes in a container running this image.",
		"rdfs:domain": {
			"@id": "ocii:ImageConfig",
		},
		"rdfs:range": {
			"@id": "ocii:ImageConfigVolumes"
		}
	},
	{
		"@id": "ocii:WorkingDir",
		"@type": "http://www.w3.org/1999/02/22-rdf-syntax-ns#Property",
		"rdfs:isDefinedBy": {
			"@id": "ocii:"
		},
		"rdfs:label": "WorkingDir",
		"rdfs:comment": "A set of directories which should be created as data volumes in a container running this image.",
		"rdfs:domain": {
			"@id": "ocii:ImageConfig",
		},
		"rdfs:range": {
			"@id": "xsd:string"
		}
	},
	{
		"@id": "ocii:Labels",
		"@type": "http://www.w3.org/1999/02/22-rdf-syntax-ns#Class",
		"rdfs:isDefinedBy": {
			"@id": "ocii:"
		},
		"rdfs:label": "Labels",
		"rdfs:comment": "The field contains arbitrary metadata for the container.",
		"rdfs:domain": {
			"@id": "ocii:ImageConfig",
		},
		"rdfs:range": {
			"@id": "ocii:ImageConfigLabels"
		}
	}]
}

