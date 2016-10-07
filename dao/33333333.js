db.story_collections.insert([

    {
        "root":"A",
        "node": [   {
            "structure": {
                "name": "A",
                "father": null,
                "children": ["B", "C"],
                "feature": 1
            }, "content": {
                story_content: "This is A.",
                author: "333"
            }
        },
            {
                "structure": {
                    "name": "B",
                    "father": "A",
                    "children": ["D", "E", "F"],
                    "feature": 1
                },

                "content": {
                    story_content: "This is B.",
                    author: "333"

                }
            },
            {
                "structure": {
                    "name": "C",
                    "father": "A",
                    "children": ["G", "H"],
                    "feature": 0
                },

                "content": {

                    story_content: "This is C.",
                    author: "555"
                }
            },
            {
                "structure": {
                    name: "D",
                    "father": "B",
                    "children": [],
                    "feature": 1
                },

                "content": {
                    story_content: "This is D.",
                    author: "333"
                }
            },
            {
                "structure": {
                    name: "E",
                    "father": "B",
                    "children": [],
                    "feature": 0
                },

                "content": {
                    story_content


                        : "This is E.",
                    author: "666"
                }
            },
            {
                "structure": {
                    "name": "F",
                    "father": "B",
                    "children": [],
                    "feature": 0
                },

                "content": {
                    story_content: "This is F.",
                    author: "666"
                }
            },
            {
                "structure": {
                    name: "G",
                    "father": "C",
                    "children": ["I"],
                    "feature": 0
                },

                "content": {
                    story_content: "This is G.",
                    author: "777"
                }
            },
            {
                "structure": {
                    name: "H",
                    "father": "C",
                    "children": [],
                    "feature": 0
                },

                "content": {
                    story_content: "This is H.",
                    author: "777"
                }
            },
            {
                "structure": {
                    name: "I",
                    "father": "G",
                    "children": [],
                    "feature": 0
                },

                "content": {
                    story_content: "This is I.",
                    author: "777"
                }
            }
        ]

    }
])