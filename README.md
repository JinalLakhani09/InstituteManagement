DATABASE URL
----------------------
mongodb+srv://institutemanagement:pWSBFFPjlLnKZQ7L@cluster0.nkrmlnm.mongodb.net/


Master List
----------------------------
1)URL: http://localhost:3000/create/institute
ReqBody: {
    "name":"Competitive Exam Center"
}

2)URL:http://localhost:3000/create/board
ReqBody:{
    "name":"GSAB"
}

3)URL:http://localhost:3000/create/category
ReqBody:{
    "name":"Higher Secondary"
}

4)URL:http://localhost:3000/create/medium
ReqBody:{
    "name":"English"
}

5)URL:http://localhost:3000/create/standard
ReqBody:{
    "name":"3rd"
}

6)URL:http://localhost:3000/create/subject
ReqBody:{
    "name":"Science"
}

7)URL:http://localhost:3000/create/degree
ReqBody:{
    "name":"MCA"
}

7)URL:http://localhost:3000/create/university
ReqBody:{
    "name":"MKBU"
}

8)URL:http://localhost:3000/create/exam
ReqBody:{
    "name":"GPSC"
}

9)Competitive Exam Center registration
URL:http://localhost:3000/institute/register
ReqBody:{
    "name":"Apexa",
    "category":"Competitive Exam Center",
    "categoryId":4,
    "exam":{
        "name":"UPSC",
        "id":1
    }
}

10)School registration
URL:http://localhost:3000/institute/register
ReqBody:{
    "name":"SPEI",
    "category":"School",
    "categoryId":2,
    "school":{
        "board":"CBSE",
        "boardId":1,
        "medium":"Hindi",
        "mediumId":1,
        "class":"Primary",
        "classId":2,
        "standard":"1st",
        "standardId":1,
        "subjects":[{
            "name":"Math",
            "id":1
        },{
            "name":"Science",
            "id":2
        }]
    }
}

11)College registration
URL:http://localhost:3000/institute/register
ReqBody:{
    "name":"GLS College",
    "category":"College",
    "categoryId":3,
    "college":{
        "university":"GTU",
        "universityId":1
    }
}

