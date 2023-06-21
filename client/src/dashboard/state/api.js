import {createApi , fetchBaseQuery } from "@reduxjs/toolkit/query/react" ; 


export const api = createApi({
    baseQuery: fetchBaseQuery({baseUrl: "http://localhost:4000"}) , 
    reducerPath:"adminApi"  ,
     tagTypes:["User" , "Immobilier" , "Utilisateurs" ,"Transactions" ,"categories" ,"ImmobilierCount" , "Favorite" ] , 
//     tagTypes:["User" , "Products" , "Customers" , "Transactions" , "Admins" ] , 
    endpoints :(build)=> ({
        getUser: build.query(
            {
                query:(id) => `general/user/${id}` , 
                providesTags:["User"]
            }
        ) , 
        getPublication: build.query({
            query:()=> "client/annocements" , 
            providesTags:["Immobilier"]
        }) ,


        getUtilisateur: build.query({
            query:()=>"client/utilisateur/" , 
            providesTags: ["Utilisateurs"] , 
        }) , 

        AddUser: build.mutation({
        query: (userData) => ({
        url: 'client/utilisateur/',
        method: 'POST',
        body: userData,
        }),
        invalidatesTags: ['UtilisateursAdd'],
        }),

        DeleteUser: build.mutation({
            query: (userId) => ({
                url: `client/utilisateur/${userId}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Utilisateurs'],
            }),

        
        getTransactions: build.query({
            query: ({ page, pageSize, sort, search }) => ({
              url: "client/transactions",
              method: "GET",
              params: { page, pageSize, sort, search },
            }),
            providesTags: ["Transactions"],
        }) ,
        getAdmins: build.query({
            query: () => "management/admins",
            providesTags: ["Admins"],
          }),

        // getUserPerformance: build.query({
        //     query:(id)=>`management/performance/${id}` , 
        //     providesTags:["Performance"]
        // })

        // ============================ getCategory 
        FindAllCategory: build.query({
            query:()=>"client/category" , 
            providesTags: ["categories"] , 
        }) , 
        
        AddCategory: build.mutation({
          query: (userData) => ({
          url: 'client/category',
          method: 'POST',
          body: userData,
          }),
          invalidatesTags: ['categories'],
          }),

         FindSinlCategory: build.query({
            query: (id) => `client/category/${id}`,
            providesTags: ["categories"],
            }),

        getTotalImmobiliers: build.query({
        query: () => "client/totalImmobiliers",
        providesTags: ["Immobilier"],
         }),
        getTotalCategory: build.query({
        query: () => "client/totalCategory",
        providesTags: ["categories"],
         }),
         
        getTotalUser: build.query({
        query: () => "client/totalUser",
        providesTags: ["User"],
         }),

         findImmobilierCountByCategory: build.query({
                query: () => "client/immobilier/count-by-category",
                providesTags: ["ImmobilierCount"],
         }),

          
            getImmobilierByPlace: build.query({
                query: (id) => `client/tourad/test/${id}`,
                providesTags: ["Immobilier"],
        }),
            
        getUserPhoneNumber: build.query({
            query: (id) => `client/Numero/${id}`,
            providesTags: ["User"],
            }),
   
            getTotalFavorite: build.query({
                query: () => "client/TotalFavoriat",
                providesTags: ["Favorite"],
         }),



    }) ,


})  ;

export const {
    useGetUserQuery ,
    useGetPublicationQuery ,
    useGetUtilisateurQuery ,
    useAddUserMutation,
    useGetTransactionsQuery , 
    useGetAdminsQuery ,
    useFindAllCategoryQuery , 
    useDeleteUserMutation ,
    useAddCategoryMutation ,
    useFindSinlCategoryQuery ,
    useGetTotalImmobiliersQuery ,
    useGetTotalCategoryQuery ,
    useGetTotalUserQuery ,
    useFindImmobilierCountByCategoryQuery , 
    useGetImmobilierByPlaceQuery , 
    useGetUserPhoneNumberQuery ,
    useGetTotalFavoriteQuery
    
//     //   useGetUserPerformanceQuery
} = api ;

