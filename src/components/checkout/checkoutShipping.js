<html lang="en">
 <head>
  <meta charset="utf-8"/>
  <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
  <title>
   Checkout Page
  </title>
  <script src="https://cdn.tailwindcss.com">
  </script>
  <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" rel="stylesheet"/>
 </head>
 <body class="bg-gray-100">
  <main class="container mx-auto px-4 py-8">
   <div class="flex space-x-8">
    <div class="w-2/3 bg-white p-8 rounded-lg shadow-sm">
     <div class="flex items-center space-x-4 mb-8">
      <a class="text-blue-500" href="#">
       Account
      </a>
      <i class="fas fa-check text-blue-500">
      </i>
      <span class="text-blue-500">
       Shipping
      </span>
      <i class="fas fa-check text-blue-500">
      </i>
      <span>
       Payment
      </span>
     </div>
     <h2 class="text-xl font-bold mb-4">
      Shipping details
     </h2>
     <div class="space-y-4">
      <div>
       <label class="block text-gray-700 mb-2">
        Use saved address
       </label>
       <div class="relative">
        <input class="w-full p-3 border border-gray-300 rounded-lg" readonly="" type="text" value="123 , Electric avenue"/>
        <i class="fas fa-caret-down absolute right-3 top-3 text-gray-500">
        </i>
       </div>
      </div>
      <div>
       <label class="block text-gray-700 mb-2">
        First line of address
       </label>
       <div class="relative">
        <input class="w-full p-3 border border-gray-300 rounded-lg" readonly="" type="text" value="123"/>
        <i class="fas fa-check absolute right-3 top-3 text-gray-500">
        </i>
       </div>
      </div>
      <div>
       <label class="block text-gray-700 mb-2">
        Street name
       </label>
       <div class="relative">
        <input class="w-full p-3 border border-gray-300 rounded-lg" readonly="" type="text" value="Electric avenue"/>
        <i class="fas fa-check absolute right-3 top-3 text-gray-500">
        </i>
       </div>
      </div>
      <div class="flex space-x-4">
       <div class="w-1/2">
        <label class="block text-gray-700 mb-2">
         Postcode
        </label>
        <input class="w-full p-3 border border-gray-300 rounded-lg" readonly="" type="text" value="ABC - 123"/>
       </div>
       <div class="w-1/2">
        <label class="block text-gray-700 mb-2">
         Select shipping
        </label>
        <div class="relative">
         <input class="w-full p-3 border border-gray-300 rounded-lg" readonly="" type="text" value="Free delivery"/>
         <i class="fas fa-caret-down absolute right-3 top-3 text-gray-500">
         </i>
        </div>
       </div>
      </div>
     </div>
     <div class="flex justify-between items-center mt-8">
      <button class="text-gray-600 hover:text-black">
       Cancel order
      </button>
      <button class="bg-blue-500 text-white px-6 py-3 rounded-lg">
       Payment
      </button>
     </div>
    </div>
    <div class="w-1/3 bg-white p-8 rounded-lg shadow-sm">
     <h2 class="text-xl font-bold mb-4">
      Order Summary
     </h2>
     <div class="flex items-center mb-4">
      <img alt="Sony wireless headphones" class="w-20 h-20 object-cover rounded-lg" height="100" src="https://oaidalleapiprodscus.blob.core.windows.net/private/org-geyQbksslRyrFcXZxAJvclTq/user-MLMMiGFXcZePXSOI8PfU2Mu8/img-Nswq4eu2x37eI57rtStIgd9f.png?st=2024-11-20T07%3A12%3A14Z&amp;se=2024-11-20T09%3A12%3A14Z&amp;sp=r&amp;sv=2024-08-04&amp;sr=b&amp;rscd=inline&amp;rsct=image/png&amp;skoid=d505667d-d6c1-4a0a-bac7-5c84a87759f8&amp;sktid=a48cca56-e6da-484e-a814-9c849652bcb3&amp;skt=2024-11-20T01%3A16%3A41Z&amp;ske=2024-11-21T01%3A16%3A41Z&amp;sks=b&amp;skv=2024-08-04&amp;sig=BeOmvIvszVJ9PueNhj/LZjO4Mtu4vTRmmh9Fz6SdUUI%3D" width="100"/>
      <div class="ml-4">
       <h3 class="text-lg font-semibold">
        Sony wireless headphones
       </h3>
       <p class="text-gray-700">
        £320.45
       </p>
       <div class="flex items-center space-x-2 mt-2">
        <button class="bg-gray-200 text-gray-600 px-2 py-1 rounded">
         -
        </button>
        <span>
         1
        </span>
        <button class="bg-gray-200 text-gray-600 px-2 py-1 rounded">
         +
        </button>
       </div>
      </div>
     </div>
     <div class="mb-4">
      <label class="block text-gray-700 mb-2">
       Gift Card / Discount code
      </label>
      <div class="flex">
       <input class="w-full p-3 border border-gray-300 rounded-l-lg" type="text"/>
       <button class="bg-blue-500 text-white px-4 py-3 rounded-r-lg">
        Apply
       </button>
      </div>
     </div>
     <div class="space-y-2">
      <div class="flex justify-between">
       <span class="text-gray-700">
        Sub total
       </span>
       <span class="text-gray-700">
        £316.55
       </span>
      </div>
      <div class="flex justify-between">
       <span class="text-gray-700">
        Tax
       </span>
       <span class="text-gray-700">
        £3.45
       </span>
      </div>
      <div class="flex justify-between">
       <span class="text-gray-700">
        Shipping
       </span>
       <span class="text-green-500">
        Free
       </span>
      </div>
      <div class="flex justify-between font-bold text-lg">
       <span>
        Total
       </span>
       <span>
        £320.45
       </span>
      </div>
     </div>
    </div>
   </div>
  </main>
 </body>
</html>