<script>
  import '../app.postcss'
  import { Navbar, NavBrand, NavHamburger, NavUl, NavLi } from 'flowbite-svelte'
</script>

<Navbar let:hidden let:toggle>
  <NavBrand href="/">
    <img
      src="https://flowbite.com/docs/images/logo.svg"
      class="mr-3 h-6 sm:h-9"
      alt="Flowbite Logo"
    />
    <span
      class="self-center whitespace-nowrap text-xl font-semibold dark:text-white"
    >
      Flowbite
    </span>
  </NavBrand>
  <NavHamburger on:click={toggle} />
  <NavUl {hidden}>
    <NavLi href="/" active={true}>Upload</NavLi>
    <NavLi href="/files">Files</NavLi>
  </NavUl>
</Navbar>
<div class="container mx-auto px-4 bg-slate-300">
  <slot />
</div>
