<html>
 <head>
  <script src="https://cdn.tailwindcss.com">
  </script>
  <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" rel="stylesheet"/>
 </head>
 <body class="bg-gray-100">
  <main class="container mx-auto px-4 py-8">
   <div class="flex space-x-8">
    <div class="w-2/3 bg-white p-8 rounded-lg shadow-sm">
     <div class="flex items-center space-x-4 mb-8">
      <a class="text-blue-600" href="#">
       Account
      </a>
      <i class="fas fa-check-circle text-blue-600">
      </i>
      <span class="text-gray-400">
       Shipping
      </span>
      <i class="fas fa-check-circle text-gray-400">
      </i>
      <span class="text-gray-400">
       Payment
      </span>
     </div>
     <h2 class="text-xl font-bold mb-4">
      Account details
     </h2>
     <form>
      <div class="mb-4">
       <label class="block text-gray-600 mb-2">
        Email address
       </label>
       <div class="relative">
        <input class="w-full p-3 border rounded-lg bg-gray-100" readonly="" type="email" value="Email@myemail.com"/>
        <i class="fas fa-check-circle absolute right-3 top-3 text-gray-400">
        </i>
       </div>
      </div>
      <div class="mb-4">
       <label class="block text-gray-600 mb-2">
        Password
       </label>
       <div class="relative">
        <input class="w-full p-3 border rounded-lg bg-gray-100" readonly="" type="password" value="********"/>
        <i class="fas fa-check-circle absolute right-3 top-3 text-gray-400">
        </i>
       </div>
      </div>
      <div class="flex space-x-4">
       <button class="w-full py-3 bg-blue-600 text-white rounded-lg" type="button">
        Register for account
       </button>
       <button class="w-full py-3 bg-blue-600 text-white rounded-lg" type="button">
        Login
       </button>
      </div>
     </form>
     <div class="mt-8 border-t pt-4">
      <button class="text-gray-600" type="button">
       Cancel order
      </button>
      <button class="ml-4 py-3 px-6 bg-blue-600 text-white rounded-lg" type="button">
       Shipping details
      </button>
     </div>
    </div>
    <div class="w-1/3 bg-white p-8 rounded-lg shadow-sm">
     <h2 class="text-xl font-bold mb-4">
      Order Summary
     </h2>
     <div class="flex items-center mb-4">
      <img alt="Sony wireless headphones" class="w-20 h-20 rounded-lg" height="100" src="https://oaidalleapiprodscus.blob.core.windows.net/private/org-geyQbksslRyrFcXZxAJvclTq/user-MLMMiGFXcZePXSOI8PfU2Mu8/img-P1gvQB6W6H7LB0zbHfXXnfdm.png?st=2024-11-20T07%3A09%3A57Z&amp;se=2024-11-20T09%3A09%3A57Z&amp;sp=r&amp;sv=2024-08-04&amp;sr=b&amp;rscd=inline&amp;rsct=image/png&amp;skoid=d505667d-d6c1-4a0a-bac7-5c84a87759f8&amp;sktid=a48cca56-e6da-484e-a814-9c849652bcb3&amp;skt=2024-11-20T00%3A43%3A21Z&amp;ske=2024-11-21T00%3A43%3A21Z&amp;sks=b&amp;skv=2024-08-04&amp;sig=Q2XXQ1sNyoHj3j%2BS1dL4t5u2juwRpuKScSXrZue7qyU%3D" width="100"/>
      <div class="ml-4">
       <h3 class="text-lg font-bold">
        Sony wireless headphones
       </h3>
       <p class="text-lg font-bold text-gray-900">
        £320.45
       </p>
       <div class="flex items-center space-x-2 mt-2">
        <button class="text-gray-600">
         <i class="fas fa-minus">
         </i>
        </button>
        <span>
         1
        </span>
        <button class="text-gray-600">
         <i class="fas fa-plus">
         </i>
        </button>
       </div>
      </div>
     </div>
     <div class="mb-4">
      <label class="block text-gray-600 mb-2">
       Gift Card / Discount code
      </label>
      <div class="flex">
       <input class="w-full p-3 border rounded-l-lg bg-gray-100" type="text"/>
       <button class="py-3 px-6 bg-blue-600 text-white rounded-r-lg">
        Apply
       </button>
      </div>
     </div>
     <div class="space-y-2">
      <div class="flex justify-between">
       <span class="text-gray-600">
        Sub total
       </span>
       <span class="text-gray-900">
        £316.55
       </span>
      </div>
      <div class="flex justify-between">
       <span class="text-gray-600">
        Tax
       </span>
       <span class="text-gray-900">
        £3.45
       </span>
      </div>
      <div class="flex justify-between">
       <span class="text-gray-600">
        Shipping
       </span>
       <span class="text-gray-900">
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