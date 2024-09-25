// Import Supabase client
import { createClient } from '@supabase/supabase-js';

// Supabase project details (Replace with your project's values)
const supabaseUrl = 'https://hitufpxgsgjlnqfddmnm.supabase.co'; // Your Supabase project URL
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhpdHVmcHhnc2dqbG5xZmRkbW5tIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjcyNDI2NzEsImV4cCI6MjA0MjgxODY3MX0.TVGSnj_7SyEW_7g05BBz_1tlnmLgiB9U24XMkQ6VT9s'; // Your Supabase anon public key

// Initialize the Supabase client
const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Vue.js App
new Vue({
    el: '#app',
    data: {
        about: {
            bio: 'Hello! I’m Shannon, a marine scientist and second-year Ph.D. student at Rutgers University...',
            email: 'Shannon.Dickey@rutgers.edu',
            location: 'New Brunswick, NJ'
        },
        loggedIn: false,  // Track login status
        email: '',  // Login email
        password: '',  // Login password
        blogPosts: [],  // Store fetched blog posts
        newPost: {
            title: '',
            content: ''
        }
    },
    async created() {
        // Fetch all existing blog posts on app load
        await this.fetchBlogPosts();
    },
    methods: {
        // User login
        async login() {
            const { user, error } = await supabase.auth.signIn({
                email: this.email,
                password: this.password,
            });
            if (error) {
                alert('Login failed: ' + error.message);
            } else {
                this.loggedIn = true;
                alert('Logged in successfully');
            }
        },
        // User logout
        async logout() {
            const { error } = await supabase.auth.signOut();
            if (error) {
                alert('Logout failed: ' + error.message);
            } else {
                this.loggedIn = false;
                alert('Logged out');
            }
        },
        // Add a new blog post
        async addPost() {
            if (this.loggedIn) {
                const { data, error } = await supabase
                    .from('blog_posts')
                    .insert([
                        { title: this.newPost.title, content: this.newPost.content },
                    ]);

                if (error) {
                    alert('Failed to add post: ' + error.message);
                } else {
                    alert('Post added successfully');
                    this.fetchBlogPosts();  // Refresh blog posts after adding new one
                    this.newPost.title = '';
                    this.newPost.content = '';
                }
            } else {
                alert('You must be logged in to post.');
            }
        },
        // Fetch blog posts from Supabase
        async fetchBlogPosts() {
            const { data: blogPosts, error } = await supabase
                .from('blog_posts')
                .select('*')
                .order('created_at', { ascending: false });

            if (error) {
                alert('Failed to fetch posts: ' + error.message);
            } else {
                this.blogPosts = blogPosts;
            }
        }
    }
});
