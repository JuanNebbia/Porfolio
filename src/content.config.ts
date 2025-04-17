import { defineCollection, z } from 'astro:content';

const about = defineCollection({ 
    type: "data",
    schema: z.object({
        title: z.string(),
        about: z.array(z.string()),
        network: z.object({
            github: z.string(),
            linkedin: z.string(),
            cv: z.string()
        })
    })
});

const projects = defineCollection({ 
    type: "data",
    schema: z.object({
        title: z.string(),
        buttons: z.object({
            view: z.string(),
            repository: z.string()
        }),
        projects: z.array( z.object({
                title: z.string(),
                description: z.string(),
                date: z.string(),
                techs: z.array(z.string()),
                img: z.string(),
                url: z.string()
            
        }))
    })
});

const navbar = defineCollection({
    type: 'data',
    schema: z.object({
        about: z.string(),
        projects: z.string(),
        experiences: z.string(),
        certificates: z.string(),
        contact: z.string()
    })
})

const experiences = defineCollection({
    type: 'data',
    schema: z.object({
        title: z.string(),
        experiences: z.array( z.object( {
            title: z.string(),
            organization: z.string(),
            description: z.string(),
            date: z.array(z.string())
        }))
    })
})

const certificates = defineCollection({
    type: 'data',
    schema: z.object({
        title: z.string(),
        certificates: z.array( z.object( {
            title: z.string(),
            organization: z.string(),
            link: z.string(),
        }))
    })
})

const contact = defineCollection({
    type: 'data',
    schema: z.object({
        title: z.string(),
        lavels: z.object({
            email: z.string(),
            subject: z.string(),
            message: z.string(),
            send: z.string(),
            sending: z.string(),
            sent: z.string()
        })
    })
})

export const collections = { about, projects, navbar, certificates };