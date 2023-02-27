let results = [
	{
		"id": 1,
		"dietName": "gluten free"
	},
	{
		"id": 2,
		"dietName": "dairy free"
	},
	{
		"id": 3,
		"dietName": "lacto ovo vegetarian"
	},
	{
		"id": 4,
		"dietName": "vegan"
	},
	{
		"id": 5,
		"dietName": "paleolithic"
	},
	{
		"id": 6,
		"dietName": "primal"
	},
	{
		"id": 7,
		"dietName": "whole 30"
	},
	{
		"id": 8,
		"dietName": "pescatarian"
	},
	{
		"id": 9,
		"dietName": "ketogenic"
	},
	{
		"id": 10,
		"dietName": "fodmap friendly"
	}
]

if(!results.includes('vegetarian')){
    results.push('vegetarian')
    
}

console.log(results)