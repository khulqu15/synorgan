<template>
    <div class="w-full h-20 fixed left-0 -bottom-2 z-20">
        <div class="border-t-2 p-3 bg-base-100 shadow-5xl border-gray-200">
            <div class="flex items-center justify-items-center justify-center text-center">
                <div class="grow">
                    <button @click="$router.push({name: 'DashboardPage'})" class="btn btn-ghost">
                        <img src="assets/icons/home.png" class="w-8" alt="">
                    </button>
                </div>
                <div class="grow">
                    <button class="btn btn-ghost">
                        <img src="assets/icons/gift-discount.png" class="w-8" alt="">
                    </button>
                </div>
                <div class="grow">
                    <button  @click="$router.push({name: 'UserProfilePage'})" class="btn btn-ghost">
                        <img src="assets/avatars/1.png" class="w-8" alt="">
                    </button>
                </div>
                <div class="grow">
                    <button class="btn btn-ghost">
                        <img src="assets/icons/no_notification.png" class="w-8" alt="">
                    </button>
                </div>
                 <div class="grow">
                    <button class="btn btn-ghost">
                        <img src="assets/icons/shield.png" class="w-8" alt="">
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>