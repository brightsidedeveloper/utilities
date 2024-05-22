import fs from 'fs'
import simpleGit from 'simple-git'
import path from 'path'

const git = simpleGit()

const filePath = path.join(__dirname, 'yeah-this-is-real.ts')
const fileContent = `console.log("Hello, World!");\n
console.log("This file was generated and pushed to GitHub using Node.js!");`

// Step 1: Generate the file
fs.writeFileSync(filePath, fileContent, 'utf8')

// Step 2: Add, commit, and push the file
async function pushToGithub() {
  try {
    await git.add(filePath)
    await git.commit('Add generated file')
    await git.push('origin', 'main') // Ensure 'main' is the correct branch
    console.log('File pushed to GitHub successfully!')
  } catch (error) {
    console.error('Failed to push file to GitHub:', error)
  }
}

pushToGithub()
