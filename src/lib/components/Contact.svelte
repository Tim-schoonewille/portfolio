<script lang="ts">
  import { enhance } from "$app/forms";

  // Using Svelte 5's runes for form state
  let formData = $state({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const showTag = true;

  let isSubmitting = $state(false);
  let formSubmitted = $state(false);
  let formError = $state<string | null>(null);
</script>

<section id="contact" class="w-full py-12 md:py-16 lg:py-20">
  <div class="container mx-auto px-4 md:px-6">
    <div
      class="flex flex-col items-center justify-center space-y-4 text-center"
    >
      <div class="space-y-2">
        {#if showTag}
          <span
            class="inline-flex items-center rounded-full border border-blue-200 px-3 py-1 text-sm font-medium bg-blue-100 text-blue-800"
          >
            Contact
          </span>
        {/if}
        <h2
          class="text-3xl font-bold tracking-tighter sm:text-5xl bg-gradient-text bg-gradient-to-r from-primary-600 via-secondary-500 to-primary-600"
        >
          Kom in contact
        </h2>
        <p
          class="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
        >
          Vragen? Stel ze gerust
        </p>
      </div>
    </div>
    <div class="mx-auto grid max-w-5xl gap-6 py-8 lg:grid-cols-2">
      <div class="flex flex-col gap-4">
        <h3 class="text-2xl font-bold text-primary-700">Contact Informatie</h3>
        <div class="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="h-5 w-5 text-primary-600"
          >
            <rect width="20" height="16" x="2" y="4" rx="2"></rect>
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
          </svg>
          <span
            ><a
              class="hover:text-secondary-600 hover:cursor-pointer hover:underline"
              href="mailto:tim.schoonewille@gmail.com"
              target="_blank">tim.schoonewille@gmail.com</a
            ></span
          >
        </div>
        <div class="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="h-5 w-5 text-primary-600"
          >
            <path
              d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
            ></path>
            <rect width="4" height="12" x="2" y="9"></rect>
            <circle cx="4" cy="4" r="2"></circle>
          </svg>
          <span
            ><a
              class="hover:text-secondary-600 hover:cursor-pointer hover:underline"
              href="https://www.linkedin.com/in/timschoonewille"
              target="_blank">linkedin.com/in/timschoonewille</a
            ></span
          >
        </div>
        <div class="flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="h-5 w-5 text-primary-600"
          >
            <path
              d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"
            ></path>
            <path d="M9 18c-4.51 2-5-2-7-2"></path>
          </svg>
          <span
            ><a
              class="hover:text-secondary-600 hover:cursor-pointer hover:underline"
              href="https://www.github.com/Tim-schoonewille"
              >github.com/Tim-schoonewille</a
            ></span
          >
        </div>
        <div class="mt-6">
          <h4 class="text-xl font-bold mb-2 text-primary-700">Locatie</h4>
          <p>Parkstad, Nederland</p>
        </div>
      </div>
      <div class="rounded-lg border border-gray-200 bg-white shadow-sm">
        <div class="p-6 space-y-4">
          <h3 class="text-2xl font-bold text-primary-700">Stuur een bericht</h3>

          {#if formSubmitted}
            <div class="p-4 bg-green-50 text-green-700 rounded-md">
              Bedankt voor je bericht! Ik zal zo spoedig mogelijk reageren.
            </div>
          {:else}
            <form
              method="POST"
              action="?/sendMail"
              use:enhance={() => {
                isSubmitting = true;

                return async ({ update }) => {
                  await update();
                  isSubmitting = false;
                  formSubmitted = true;
                };
              }}
              class="space-y-4 relative p-1 rounded-lg bg-gradient-to-r from-primary-400/20 via-secondary-400/20 to-accent-400/20"
            >
              <div class="bg-white rounded-md p-4">
                {#if formError}
                  <div
                    class="p-3 mb-4 bg-red-50 text-red-700 rounded-md text-sm"
                  >
                    {formError}
                  </div>
                {/if}

                <div class="grid grid-cols-2 gap-4">
                  <div class="space-y-2">
                    <label for="name" class="text-sm font-medium leading-none">
                      Naam
                    </label>
                    <input
                      id="name"
                      name="name"
                      bind:value={formData.name}
                      class="flex h-10 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                      required
                    />
                  </div>
                  <div class="space-y-2">
                    <label for="email" class="text-sm font-medium leading-none">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      bind:value={formData.email}
                      class="flex h-10 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                      required
                    />
                  </div>
                </div>
                <div class="space-y-2">
                  <label for="subject" class="text-sm font-medium leading-none">
                    Onderwerp
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    bind:value={formData.subject}
                    class="flex h-10 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                    required
                  />
                </div>
                <div class="space-y-2">
                  <label for="message" class="text-sm font-medium leading-none">
                    Bericht
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    bind:value={formData.message}
                    class="flex min-h-[120px] w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  class="inline-flex w-full items-center justify-center rounded-md bg-primary-600 px-4 py-2 text-sm font-medium text-white hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 disabled:opacity-70"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Versturen.." : "Stuur Bericht"}
                </button>
              </div>
            </form>
          {/if}
        </div>
      </div>
    </div>
  </div>
</section>
