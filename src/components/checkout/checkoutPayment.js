<html>
 <head>
  <script src="https://cdn.tailwindcss.com">
  </script>
  <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" rel="stylesheet"/>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&amp;display=swap" rel="stylesheet"/>
 </head>
 <body class="bg-gray-50">
  <main class="container mx-auto px-4 py-8">
   <div class="flex space-x-8">
    <div class="w-2/3 bg-white p-8 rounded-lg shadow-sm">
     <div class="flex items-center space-x-4 mb-8">
      <a class="text-blue-600" href="#">
       Account
      </a>
      <i class="fas fa-chevron-right text-gray-400">
      </i>
      <a class="text-blue-600" href="#">
       Shipping
      </a>
      <i class="fas fa-chevron-right text-gray-400">
      </i>
      <a class="text-blue-600" href="#">
       Payment
      </a>
     </div>
     <h2 class="text-xl font-semibold mb-4">
      Payment Details
     </h2>
     <div class="mb-4">
      <label class="block text-gray-700 mb-2">
       Use saved card
      </label>
      <select class="w-full p-3 border border-gray-300 rounded-lg">
       <option>
        Mastercard ending 234
       </option>
      </select>
     </div>
     <div class="mb-4">
      <label class="block text-gray-700 mb-2">
       Name on card
      </label>
      <div class="relative">
       <input class="w-full p-3 border border-gray-300 rounded-lg" type="text" value="John Smith"/>
       <i class="fas fa-check-circle absolute right-3 top-3 text-gray-400">
       </i>
      </div>
     </div>
     <div class="mb-4">
      <label class="block text-gray-700 mb-2">
       Card number
      </label>
      <input class="w-full p-3 border border-gray-300 rounded-lg" type="text" value="123 - 456 -"/>
     </div>
     <div class="flex space-x-4 mb-4">
      <div class="w-1/3">
       <label class="block text-gray-700 mb-2">
        Expiration
       </label>
       <div class="flex space-x-2">
        <input class="w-1/2 p-3 border border-gray-300 rounded-lg" type="text" value="03"/>
        <input class="w-1/2 p-3 border border-gray-300 rounded-lg" type="text" value="24"/>
       </div>
      </div>
      <div class="w-1/3">
       <label class="block text-gray-700 mb-2">
        CVC
        <i class="fas fa-question-circle text-gray-400">
        </i>
       </label>
       <input class="w-full p-3 border border-gray-300 rounded-lg" type="text" value="123"/>
      </div>
     </div>
     <div class="flex justify-between items-center mt-8">
      <button class="text-gray-700">
       Cancel order
      </button>
      <button class="bg-blue-600 text-white px-6 py-3 rounded-lg">
       Complete order
      </button>
     </div>
    </div>
    <div class="w-1/3 bg-white p-8 rounded-lg shadow-sm">
     <h2 class="text-xl font-semibold mb-4">
      Order Summary
     </h2>
     <div class="flex items-center mb-4">
      <img alt="Sony wireless headphones" class="w-20 h-20 rounded-lg" height="100" src="https://oaidalleapiprodscus.blob.core.windows.net/private/org-geyQbksslRyrFcXZxAJvclTq/user-MLMMiGFXcZePXSOI8PfU2Mu8/img-rrcXUiRc0auOfuKANAStBOo0.png?st=2024-11-20T07%3A13%3A35Z&amp;se=2024-11-20T09%3A13%3A35Z&amp;sp=r&amp;sv=2024-08-04&amp;sr=b&amp;rscd=inline&amp;rsct=image/png&amp;skoid=d505667d-d6c1-4a0a-bac7-5c84a87759f8&amp;sktid=a48cca56-e6da-484e-a814-9c849652bcb3&amp;skt=2024-11-20T00%3A45%3A10Z&amp;ske=2024-11-21T00%3A45%3A10Z&amp;sks=b&amp;skv=2024-08-04&amp;sig=Mjh/dyRlYB/wKyiu5HyqwWP2s5zFfkfDXn7DIFPnYeQ%3D" width="100"/>
      <div class="ml-4">
       <h3 class="text-gray-700">
        Sony wireless headphones
       </h3>
       <p class="text-lg font-semibold">
        £320.45
       </p>
       <div class="flex items-center space-x-2 mt-2">
        <button class="text-gray-700">
         <i class="fas fa-minus">
         </i>
        </button>
        <span>
         1
        </span>
        <button class="text-gray-700">
         <i class="fas fa-plus">
         </i>
        </button>
       </div>
      </div>
     </div>
     <div class="mb-4">
      <label class="block text-gray-700 mb-2">
       Gift Card / Discount code
      </label>
      <div class="flex space-x-2">
       <input class="w-full p-3 border border-gray-300 rounded-lg" type="text"/>
       <button class="bg-blue-600 text-white px-4 py-3 rounded-lg">
        Apply
       </button>
      </div>
     </div>
     <div class="border-t border-gray-200 pt-4">
      <div class="flex justify-between mb-2">
       <span class="text-gray-700">
        Sub total
       </span>
       <span class="text-gray-700">
        £316.55
       </span>
      </div>
      <div class="flex justify-between mb-2">
       <span class="text-gray-700">
        Tax
       </span>
       <span class="text-gray-700">
        £3.45
       </span>
      </div>
      <div class="flex justify-between mb-2">
       <span class="text-gray-700">
        Shipping
       </span>
       <span class="text-gray-700">
        Free
       </span>
      </div>
      <div class="flex justify-between font-semibold text-lg">
       <span class="text-gray-700">
        Total
       </span>
       <span class="text-gray-700">
        £320.45
       </span>
      </div>
     </div>
    </div>
   </div>
  </main>
 </body>
</html>