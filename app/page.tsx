"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Terminal, Zap, Users, TrendingUp, Rocket, Shield, Target } from "lucide-react"

export default function GundamMemeLanding() {
  const [terminalText, setTerminalText] = useState("")
  const [currentCommand, setCurrentCommand] = useState("")
  const [asciiArt, setAsciiArt] = useState("")
  const [isGenerating, setIsGenerating] = useState(false)
  const [showCursor, setShowCursor] = useState(true)

  // Blinking cursor effect
  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 500)
    return () => clearInterval(interval)
  }, [])

  // Boot sequence on load
  useEffect(() => {
    const bootSequence = [
      "INITIALIZING GUNDAM MEME PROTOCOL...",
      "LOADING MOBILE SUIT SPECIFICATIONS...",
      "CONNECTING TO LUNAR BASE...",
      "MEME CANNON ARMED AND READY",
      "WELCOME TO THE FUTURE OF DEFI WARFARE",
    ]

    let index = 0
    const interval = setInterval(() => {
      if (index < bootSequence.length) {
        setTerminalText((prev) => prev + bootSequence[index] + "\n")
        index++
      } else {
        clearInterval(interval)
      }
    }, 800)

    return () => clearInterval(interval)
  }, [])

  const generateASCII = async (prompt: string) => {
    setIsGenerating(true)

    // Easter eggs
    const easterEggs: Record<string, string> = {
      "sudo moon mission": `
    🚀 INITIATING LUNAR DEPLOYMENT SEQUENCE 🚀
         /\\   /\\
        /  \\_/  \\
       |   RX-78  |
       |  TO MOON |
        \\  ___  /
         \\/   \\/
    MISSION STATUS: DIAMOND HANDS ENGAGED`,

      "launch gundam": `
    ⚡ MOBILE SUIT LAUNCHING ⚡
        |\\    /|
        | \\  / |
        |  \\/  |
        |  /\\  |
        | /  \\ |
        |/    \\|
    STATUS: READY FOR BATTLE`,

      "show tokenomics": `
    💰 MEME ECONOMICS ACTIVATED 💰
    ┌─────────────────────────┐
    │ 40% - Community Rewards │
    │ 30% - Liquidity Pool    │
    │ 20% - Development       │
    │ 10% - Marketing Memes   │
    └─────────────────────────┘`,
    }

    if (easterEggs[prompt.toLowerCase()]) {
      setAsciiArt(easterEggs[prompt.toLowerCase()])
      setIsGenerating(false)
      return
    }

    // Simulate ASCII generation
    const gundamArts = [
      `
      ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⠃⠀⠀⠀⠀⠀⠀⡘⡽⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠃⠀⠀⠀⠀⠀⢰⢹⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠤⢄⡀⠀⢠⣡⡤⠐⢤⠤⣠⠃⡞⠀⠀⠀⠀⡴⢦⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⠴⣷⣤⣿⣿⡿⢶⣌⣳⠏⢰⣧⠀⠀⠀⣰⠳⡾⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢞⣣⣸⡿⣿⣏⣐⡿⠯⣽⡶⣽⠻⡆⠀⢠⠃⣸⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⡠⢤⢀⣤⡀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢻⠢⣽⣿⣅⡡⣴⠟⣼⡿⠃⣠⠟⢀⡏⢠⠇⠀⠀⠀⠀⠀⠀⡰⠊⣹⣾⠀⢸⣼⡇⣧⣀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⡇⢻⣯⡋⣹⣁⣴⣋⣠⣞⠋⢀⡼⠉⡿⠀⠀⠀⠀⠀⠀⣰⠁⠀⡇⡘⢀⣼⣿⣇⢉⠟⣦⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⠠⠤⣤⠄⣀⠀⠀⣱⣬⣿⣿⣿⣟⣀⣼⣿⣿⣿⣿⣷⣿⡿⠔⠒⢒⠲⢄⣰⠇⠀⠀⡇⠇⡘⣾⡁⣿⣾⢸⠸⡇⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⣟⡻⢧⢤⡋⠀⣩⣭⣟⣽⣿⣸⣿⣿⠓⣹⢿⣿⣷⣻⣽⣛⣿⢸⣀⣀⠠⢄⣳⠶⠟⠀⠀⢸⢀⠁⡗⣿⣿⣿⣿⡀⠀⡷⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢺⠀⣂⣼⣈⣸⣿⣿⣿⣵⣾⠟⢉⣽⣵⣿⣿⣿⠟⣫⣵⡿⣿⣟⡉⠀⣾⠛⡅⠀⢀⠁⠀⠀⢸⠊⠀⠳⣹⣿⣿⡿⣇⠀⢻⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠸⢿⣟⣆⣸⣿⣿⣿⠋⢹⠓⣊⣿⣿⣿⣿⡭⢶⣿⣿⣻⣽⣿⣦⡼⠋⠉⡹⢲⢢⠎⠀⠀⠀⡀⢠⣾⣿⠟⠛⠿⣷⣈⡇⢸⡀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣀⣼⣿⣧⣄⣸⣿⣿⣿⣿⣿⣛⣿⣿⣿⣿⠿⣿⡿⣧⣤⣿⣻⣿⣧⡤⠜⢃⣿⣿⣤⠤⣧⡜⠣⡘⠿⡿⠀⠘⣸⣿⣿⣇⠘⠃⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣼⡟⢩⣵⠬⣛⡇⢈⣿⣿⢼⣰⠯⢿⢾⣍⣀⣀⣹⣝⣿⣽⡷⣿⣻⣿⡿⢻⣿⣟⣇⠹⡿⣿⣿⣆⠑⣀⣹⠲⣾⢿⡟⡽⢉⣤⢧⣄
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡇⣷⡏⠛⠀⢨⣿⠛⢿⣿⣧⣆⣠⠾⣛⣶⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⠁⠀⣿⡀⣯⠙⢳⣉⣍⣿⣇⡞⠈⡀⠙⢹⣛⢀⡞⠹⣼⢰
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡀⠀⢀⣷⡽⣇⡴⠿⡿⠁⠀⠀⠙⢿⡘⡅⠀⢉⣬⠏⠉⣺⣿⣽⣿⡟⠋⠁⠀⠀⠀⢻⡹⣷⡈⠀⢿⣿⣿⡿⠀⠀⡇⠀⢸⢸⢸⠀⠰⣿⣘
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣴⡶⣟⣿⡖⠉⠻⣿⣿⣾⡶⠃⠀⠀⠀⢠⢾⢾⣧⢖⡫⠷⠖⣾⣿⣿⣿⠿⣓⢲⠀⠀⠀⠀⠀⢱⢾⣿⣆⢸⣿⣿⡇⠀⠀⠣⠤⡼⣸⡏⣠⣿⡻⣿
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣼⣾⣟⡿⡽⠑⠔⢒⣽⣻⣿⠃⠀⠀⠀⣀⠎⣸⣾⡋⢋⣠⠜⣡⣾⣿⢻⣿⠃⠘⠙⠣⢄⠀⠀⠀⢠⡿⠋⣙⣮⣿⣷⣧⡔⠆⠀⠀⠀⣿⣷⣿⢯⡿⠋
⠀⠀⠀⠀⠀⠀⠀⠀⠀⡜⣼⣷⢯⣿⡇⠈⣴⠋⢻⡿⠋⠀⢀⣔⣈⣤⠾⣿⣿⣴⣿⣩⡶⠿⣽⣾⣿⠷⣦⣄⣀⣠⠊⢱⣆⠀⡟⢲⠞⠁⠀⠁⡀⣿⡆⠀⠀⠀⣼⣿⠉⠿⣿⣆⠀
⠀⠀⠀⣠⠴⠿⣟⣾⣿⣽⣿⣿⣼⡇⣿⣿⣷⣶⡆⠀⡇⢸⣿⡇⠀⢹⡄⠈⡟⠨⠍⠏⠀⠈⢹⡿⠋⣰⣿⣿⠃⢀⠔⡿⣿⡄⡗⢸⡄⠀⠙⡆⠁⢸⣱⠀⠀⡜⣼⡿⣄⡄⢸⡟⠀
⠀⠀⠀⠘⠬⣛⣷⣻⣿⢻⣟⣿⣟⡁⣉⣩⣿⣾⡏⠀⢸⢻⡆⣿⣷⠀⢸⡿⠒⢷⠈⣹⢶⡟⢺⡇⣧⠘⣿⣿⡄⡸⣅⠀⢻⣿⡀⢢⠟⠀⠈⣳⢨⠀⢸⠀⢰⣿⢸⣣⠎⣿⣷⠀⠀
⠀⠀⠀⠀⣀⣴⢿⣿⡟⢻⣿⣿⣿⣿⡿⠟⠟⠋⠀⠀⣾⠘⢿⣿⣿⣦⠟⣿⣄⠈⠳⠟⠰⡇⢸⣿⠸⣦⣿⣿⡧⢣⣾⣦⠈⣻⡕⡇⠀⠀⡎⠀⢹⠀⠀⢢⣏⣯⣾⡅⠘⣿⡏⠀⠀
⠀⠀⠀⢸⣿⢧⣿⣿⣿⡾⣟⣿⣿⣿⡄⠀⠀⠀⠀⠠⡏⠀⠀⠉⠉⡎⠀⠁⢸⠄⢲⠀⣸⠇⠀⡏⠀⠀⠀⠀⠀⢸⠀⢸⠀⢹⡇⡇⠀⠀⡇⠀⢸⣧⠚⠙⣶⡿⣽⠃⠀⣿⠃⠀⠀
⠀⠀⢀⣾⡿⢋⠇⢠⣾⣿⣽⣟⣾⡽⠃⠀⠀⠀⠀⠠⡇⠀⠀⠀⢠⠃⠀⠐⣼⠀⢨⠟⣽⠀⠀⡇⠀⠀⠀⠀⠀⡇⣰⠋⣇⣟⣧⢸⠀⠀⡇⠘⠟⠳⣆⣴⠾⣯⡽⠀⢸⡟⠀⠀⠀
⠀⠀⣸⣿⠀⡞⣰⣿⣿⣾⡟⠉⠀⠀⠀⠀⠀⠀⠀⠀⢃⠀⠀⠀⠸⠀⢀⡴⣏⢀⡟⢠⠇⠀⠀⢳⡀⠀⠀⠀⠀⡇⣰⠋⣇⣟⣧⢸⠀⠀⡇⠀⠀⠀⣼⠁⠀⠀⡇⠀⣿⠇⠀⠀⠀
⠀⠀⣿⣇⣤⣷⣿⣿⣿⣟⠞⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⡀⠀⠀⠀⢠⡏⠀⣽⣾⣅⡾⠁⠀⠀⠘⣧⠀⠀⠀⠀⣧⡏⢀⣿⣿⣷⢸⠀⠀⡇⠀⠀⢀⣿⡀⠀⢸⠃⢸⡿⠀⠀⠀⠀
⠀⠀⢻⡿⢁⣿⣿⡾⣷⠏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⣿⣽⣏⣯⡿⠀⣾⠋⢉⢿⡆⠀⠀⠀⠀⢫⣣⣶⣶⣶⣼⠃⣼⡇⠸⣿⢸⠀⠀⡇⢀⡴⢋⡇⢳⡀⡿⠀⣼⠇⠀⠀⠀⠀
⠀⠀⣼⠃⣾⣿⡿⠛⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠹⠿⣿⡿⣥⠞⢹⠀⢸⣈⣷⠀⠀⠀⠀⠀⠣⣿⣿⡿⠿⡼⠁⢧⠀⢿⡜⡆⠀⡷⠋⠀⣾⢸⡿⠈⣿⣾⡟⢀⣀⣀⣀⣀
⠀⠀⢻⡿⢁⣿⣿⡾⣷⠏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⣿⣿⣿⣵⣾⠟⢉⣽⣵⣿⣿⣿⠟⣫⣵⡿⣿⣟⡉⠀⣾⠛⡅⠀⢀⠞⠁⠀⠀⢀⣴⣿⣿⠃⢀⣿⣿⣿⣿⣿⣿⣿
⠀⠀⣸⣿⣿⣿⣿⣿⣿⣧⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀
⠀⠀⠀⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉
    STATUS: MEME CANNON READY`,

      `
      ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡀⠀⠀⠀⠀⠀⠀⠐⣱⠄⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠐⠤⢀⣤⣤⣀⣠⠴⠊⠁⠀⠀⠀⠀⠀⢀⢌⢝⠂⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡘⣆⠀⠀⠀⠀⠀⢴⣏⣻⡻⣼⣦⡀⠀⠀⠀⠀⠀⠀⠠⢨⡲⠁⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⡘⣆⠀⠀⢠⢿⠐⡗⢿⡟⣾⠲⣿⠆⠀⠀⠀⠀⠐⠰⠕⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠠⠘⡄⠀⠀⢿⡀⣦⣿⣗⣻⢸⣿⢶⠀⠀⠀⢨⡮⠫⠀⠐⡂⡆⡀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠡⠘⡄⢘⢷⡏⠃⣩⣩⠟⣁⢝⡺⢅⡺⡝⠁⠀⠀⠀⣌⢳⣜⣲⡐⢄⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⢀⡀⢯⣂⣭⡽⢷⡶⢶⢣⡚⡜⢮⡘⣧⡝⠀⠀⠀⢀⠲⣼⣿⣿⣿⣾⡙⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠠⠀⠁⡀⣧⡙⢦⡙⢦⡙⢦⣙⣮⣱⣹⣜⣧⣿⡿⠁⠀⣀⡠⢣⠟⠑⠛⡝⣿⠍⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⠁⠀⢾⠟⣒⣻⢧⣙⢦⡙⣶⣿⣗⣒⣒⣒⣊⣿⣷⣧⢳⣌⡏⠃⠀⠀⠀⠘⡲⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠲⢠⠜⣷⡒⣺⢦⣍⣶⣽⣿⣿⣿⣶⣶⣶⣒⣿⣿⣿⣿⣿⡷⡀⠀⠀⠀⠀⠰⣡⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⠁⠈⢛⣷⢿⣿⠿⡿⢿⣿⣿⣻⣞⡷⢯⣟⣿⣿⣿⣿⣿⡏⠱⡀⣀⡤⠖⠋⡹⣧⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡀⠀⠀⠴⣩⣿⣭⣷⣽⣾⣿⣿⢷⣛⣾⣻⣾⣿⣿⣿⡿⠋⠀⠀⢹⠁⠀⡀⠄⠑⠾⣆⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⠀⠀⢰⢳⢍⣿⣻⡟⡔⣎⢿⣯⠿⣽⡞⣷⣻⣿⣿⡿⠁⠀⠀⠀⢸⠂⠁⠀⠀⠀⠸⠜⡄⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠐⠥⠄⡰⣟⡿⠻⣽⢷⠿⣺⢞⢾⠛⠉⠁⢩⢧⡉⠟⡟⠓⢆⡀⠀⠀⠈⠀⠀⠀⠀⠀⠄⢏⢤⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢐⡕⠀⠀⢰⣦⡿⠻⡟⣩⠆⠀⠀⠀⣸⢣⡇⠘⡜⠀⠰⡜⡄⠀⠀⠣⠀⠀⠀⣀⠠⣬⡒⡄⠀
⠀⠀⠀⠀⠀⠀⠀⢀⣀⢀⠠⣭⡁⣀⡤⡇⠀⠀⠀⡕⣣⢖⡔⡲⢒⣳⣇⠇⠸⡜⣅⢬⠱⠦⠀⠀⠘⡴⣬⣧⣷⣿⣦⡽⡤⠀
⠀⠀⠀⠀⠀⠀⠀⣷⣿⣿⣷⣝⠂⠙⠃⠀⠀⠀⠠⡇⠀⠀⠉⠉⡎⠀⣀⠈⡜⡥⡛⡭⠇⠀⠀⠀⣰⣿⣟⣾⣳⣟⣿⡜⠁⠀
⠀⠀⠀⠀⠀⠀⢀⣿⣻⣾⣿⣿⣤⣠⢄⡀⢀⠀⣾⢩⣠⠠⡔⡤⢫⡜⢻⣧⠚⣶⡟⣄⡹⢀⡀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀
⠀⠀⠀⠀⠀⠀⢸⣿⣿⣽⣿⣿⡟⢀⠀⠀⠉⠉⡞⣥⣓⣮⣳⡏⠁⠀⠀⠀⠀⠀⣡⢹⡳⠊⠀⠀⠈⣎⢳⣭⠞⣅⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠈⠻⢿⣿⣿⣿⠀⠸⠀⠀⠀⠀⡜⣥⢛⡟⠀⢠⠆⠀⠀⠀⠀⠀⢸⠣⣽⠀⠀⠀⠀⠈⠛⢷⣿⣿⣿⣿⠇⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠉⠉⠀⠀⠀⠀⠀⠀⡟⣔⠫⡜⠀⠈⡠⠀⠀⠀⠀⠀⢸⡓⡜⠀⠀⠀⠀⠀⠀⠀⠀⠉⠉⠁⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡆⠀⠀⠀⠘⡴⢋⡜⠀⠀⢀⠀⠀⠀⠀⠀⠈⢲⢩⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠄⠀⠀⣄⠘⡜⣣⢞⠀⠀⠈⡐⢀⠎⠀⠀⠈⢧⢇⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡈⠀⠀⠀⢨⣺⡜⠦⡻⠀⠀⠀⠐⣊⠀⠀⠀⠀⠈⢞⡣⢄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠁⠀⠀⠀⠀⢦⢃⢠⢏⡆⠀⠀⠆⢸⠀⠀⠀⠀⠀⢨⠼⡹⠆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢰⠀⠀⠀⠀⢰⣋⣾⠼⣎⠇⠀⠀⠆⠰⠀⠀⠀⠀⠀⢸⡜⢣⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠤⡖⠁⠊⢼⡀⠀⠀⠰⢡⠄⠀⠀⠀⠀⢸⣜⠇⡩⠄⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⠀⠀⠀⢰⡉⠀⠀⠀⠣⡅⠀⠀⢰⠀⣐⠀⠀⠀⠀⢸⡶⢀⣍⢳⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠀⠀⢀⣾⡇⠀⠀⢘⢧⡙⠀⠀⠈⠀⠸⠷⡀⠀⠀⡿⠷⣩⢎⠲⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠡⣠⡟⠁⡿⡀⢀⣋⢖⠃⠀⠀⠀⢀⠀⠆⠑⢒⢺⡏⠘⡰⢎⡓⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⠞⠀⠀⡟⣇⡜⠴⠎⠀⠀⠀⠀⠈⢦⢀⠀⠙⠚⠀⠀⠙⣦⡙⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡄⠀⠀⠀⡟⡼⢜⠍⠀⠀⠀⠀⠀⠀⠀⠂⠀⠀⠀⠀⠀⠈⢆⣃⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠠⠀⠀⠀⠀⡛⢴⢋⠀⠀⠀⠀⠀⠀⠀⠀⠀⡄⠀⠀⠀⠀⠀⠫⡜⡀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠃⠀⠀⢀⡼⣙⡜⡪⡄⠀⠀⠀⠀⠀⠀⠀⡄⡣⠄⠀⠀⠐⠒⠚⡗⣣⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⡠⠊⠀⠈⠁⣠⠦⣇⢧⢚⡱⢃⠀⠀⠀⠀⠀⠀⢀⢃⡆⠀⠀⠀⠀⠀⠀⢫⢍⣆⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⣀⢊⣀⣀⣀⠠⢪⢱⣋⠞⣮⣣⠿⡋⠀⠀⠀⠀⠀⠀⠄⢈⢂⣀⡤⠤⠠⠀⠄⣴⢎⡴⢂⡄⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⡀⠀⠊⠉⠉⠁⢼⣛⡼⣣⡎⣝⢲⡍⣯⡹⠀⠀⠀⠀⠀⢀⡡⠫⠀⠀⠀⠀⠀⠀⠀⠈⣎⢳⣭⠞⣅⠀⠀⠀⠀
⢠⡴⢿⡉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢻⡀⠀⠀⠀⠀⠀⠀⠀⠀⢸⡇⢸⡇⢸⡇⠀⠀⠀
⢀⣴⣿⣿⣷⣶⣶⣶⣶⣶⣶⣶⣶⣶⣶⣶⣶⣶⣶⣶⣶⣶⣶⣶⣶⣶⣶⣷⣶⣶⣶⣶⣶⣶⣶⣶⣾⣿⣿⣿⣿⣿⣿⣦⣀
⠘⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⠀⠀⠀⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉⠉
    STATUS: [████████] 100%
    BEAM RIFLE: READY
    SHIELD: EQUIPPED`,

      `
      ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣀⣀⣀⣀⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣠⢞⣉⣀⡀⠀⠀⠀⠉⠙⠒⣶⡶⠤⢤⣄⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡠⠐⠛⠈⢀⣁⣀⡈⠀⠑⠐⠦⣄⡀⠈⠙⠳⣦⣄⡈⠙⠦⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⠖⠋⠁⠠⠐⠐⠆⠂⠤⣯⣙⠓⠦⣄⡀⠙⢦⡀⠀⠀⠙⢿⣆⠀⠈⢷⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡼⠁⠀⠀⠀⡀⠀⠐⠛⣯⠟⠉⠉⠉⠛⠚⠻⠤⣬⣿⠀⠀⠀⢠⡾⠃⠀⢀⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⠃⠀⢀⠀⢀⠴⣾⠒⡾⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠉⠛⠦⢿⡤⠶⢶⣿⢿⠙⠶⣄⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡞⢐⣐⠴⠋⢁⠄⠀⣺⡟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢹⠀⠀⠋⠙⡿⠀⠀⠀⠇⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣰⣰⠞⠁⠀⢀⡀⠀⢠⡿⠀⢀⣤⣤⠤⠤⣀⣀⠀⠀⠀⠀⠀⠀⠀⠀⣿⠀⠀⠘⠀⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⡠⣀⠔⢋⡄⠀⢀⢘⠇⡰⣿⠁⣠⢴⡒⣒⣂⣍⠛⠲⢦⡀⢀⡀⡂⠀⠀⠀⢸⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⠧⠉⠀⠀⠉⠀⠀⣨⠊⠁⣠⠾⢻⢸⣾⡿⠗⠒⠛⠛⠲⠸⣍⣭⠉⠹⠵⠶⣴⣿⢱⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡾⠀⠀⡰⠋⠓⣦⠞⠀⣴⠊⠁⠀⠘⡈⠉⠀⠀⠀⠀⠀⠀⠀⣽⠋⣯⠔⠚⠋⠋⠉⠁⡼⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡇⠀⠀⡇⢰⠋⠊⠿⢾⡇⠀⠀⠀⠀⠙⠦⢤⣤⣀⡀⡀⠀⣸⠇⠀⢹⠆⠀⠀⠀⠀⢸⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢱⣴⠀⣇⢸⠋⡇⠀⢈⡇⠀⠀⠀⠀⠀⠀⠀⠀⠉⠉⠙⠛⢷⣾⠀⠘⣇⣀⣀⡀⢀⡼⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⢸⠀⠈⠧⡉⢁⠄⠘⣿⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⡟⠳⣽⠃⠀⠀⠉⡏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣼⠄⡀⠀⠀⠉⠉⠀⠲⠁⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠁⠀⠀⠀⢀⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠁⠘⠃⠂⠀⠀⠀⢀⡀⠁⢳⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⠖⠒⠲⠦⠤⡄⠀⠀⠠⡋⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⠀⠀⠀⠀⣏⠀⠀⣃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠤⠤⠄⠀⠀⠠⡬⠀⠇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⠀⢰⠀⡆⣢⢶⠘⢿⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⠀⡎⣁⡇⢻⡌⢧⡀⠙⠳⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢹⠀⣇⣾⠧⠈⠇⠀⠳⡄⠀⠈⠓⢦⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡜⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠠⣿⢸⣹⣦⣀⠀⠀⠀⠘⢦⡀⠀⠀⠙⠻⢶⣤⣤⣀⣀⣀⣀⡼⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢰⠏⠉⠛⣧⠈⠓⢦⣀⠀⠀⠱⡄⠀⠀⠀⠀⠀⠉⠛⢳⣿⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣴⠃⠀⠀⠀⢸⡀⠀⠀⠈⠙⠲⢤⣿⠀⠀⠀⠀⠀⣀⠤⠛⡟⠧⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣀⡠⠤⠴⠖⢻⡇⠀⠀⠀⠀⠀⣧⠀⠀⠀⠀⠀⠀⠈⠙⠒⠤⣶⠛⠀⠀⢸⠀⠀⢦⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣀⣀⣤⠤⠶⠒⠛⠉⠉⠀⠀⠀⠀⠀⢸⠃⠀⠀⠀⠀⠀⢸⡆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡀⢠⡴⢦⡀⠘⣆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⣀⣀⡤⠴⠒⠚⠋⠉⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣾⠀⠀⠀⠀⠀⠀⠀⢿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣼⠋⠀⠀⠀⢹⣧⠀⣧⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⢠⡴⢿⡉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡏⠀⠀⠀⠀⠀⠀⠀⠘⣷⡀⠀⠀⠀⠀⠀⠀⢀⡼⣇⠀⠀⠀⠀⠀⠀⢹⣼⠐⢢⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⢠⠏⠀⠀⠛⣦⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡗⠀⠀⠀⠀⠀⠀⠀⠀⢳⠻⣦⠀⠀⠀⠀⢀⡞⠁⠈⠛⠲⠤⣶⢫⠙⢿⠀⠀⢡⠉⠓⠦⢄⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⢀⠏⠀⠀⠀⠀⠘⣧⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⣇⠈⢷⡄⠀⢀⡞⠀⠀⠀⠀⠀⠀⡿⠀⠹⠀⠸⡄⠀⢰⡀⠀⠀⠀⠁⠠⢀⠀⠀⠀⠀⠀⠀
⠟⠀⠀⠀⠀⠀⠀⠘⣆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢹⡄⠀⠙⢦⡾⠀⠀⠀⠀⠀⠀⠀⢸⠀⠀⡇⠀⠈⣇⠀⢰⡄⠀⠀⠀⠀⠀⠀⠀⠐⠢⠄⡀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠃⠀⠀⢀⡼⣙⡜⡪⡄⠀⠀⠀⠀⠀⠀⠀⡄⡣⠄⠀⠀⠐⠒⠚⡗⣣⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⡠⠊⠀⠈⠁⣠⠦⣇⢧⢚⡱⢃⠀⠀⠀⠀⠀⠀⢀⢃⡆⠀⠀⠀⠀⠀⠀⢫⢍⣆⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⣀⢊⣀⣀⣀⠠⢪⢱⣋⠞⣮⣣⠿⡋⠀⠀⠀⠀⠀⠀⠄⢈⢂⣀⡤⠤⠠⠀⠄⣴⢎⡴⢂⡄⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⡀⠀⠊⠉⠉⠁⢼⣛⡼⣣⡎⣝⢲⡍⣯⡹⠀⠀⠀⠀⠀⢁⡡⠫⠀⠀⠀⠀⠀⠀⠀⠈⣎⢳⣭⠞⣅⠀⠀⠀⠀
⠀⠀⣠⣴⢷⣶⡴⣦⣤⣴⣝⢦⠳⡜⣥⢛⢧⡳⡜⢧⡳⠀⠀⠀⠀⠀⡨⢡⠂⣀⣀⣀⣀⣀⣀⣀⣀⣕⠮⣜⢿⢼⠀⠀⠀⠀
⢠⣾⣻⣞⢿⣺⣽⣳⣿⣿⣿⣿⣿⣾⣧⣾⣦⣳⣍⣯⣅⠀⠀⠀⠀⠨⣡⣶⣟⣯⢿⡽⢯⡿⣽⣻⣽⣻⣿⣮⣎⢇⠀⠀⠀⠀
⠀⠉⠉⠉⠉⠉⠀⠛⠛⠛⠛⠛⠛⠛⠛⠛⠛⠛⠛⠛⠛⠀⠀⠀⠀⣾⣻⢾⡽⣞⣯⣟⣯⣟⢷⣛⡾⣵⢿⣿⣿⣿⡆⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⠓⠛⠛⠛⠛⠛⠛⠛⠛⠛⠛⠻⠿⠿⠿⠿⠿⣿⡀⠀⠀
      
      `,
      `
      ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣀⣀⣀⣀⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣠⢞⣉⣀⡀⠀⠀⠀⠉⠙⠒⣶⡶⠤⢤⣄⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡠⠐⠛⠈⢀⣁⣀⡈⠀⠑⠐⠦⣄⡀⠈⠙⠳⣦⣄⡈⠙⠦⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣠⠖⠋⠁⠠⠐⠐⠆⠂⠤⣯⣙⠓⠦⣄⡀⠙⢦⡀⠀⠀⠙⢿⣆⠀⠈⢷⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡼⠁⠀⠀⠀⡀⠀⠐⠛⣯⠟⠉⠉⠉⠛⠚⠻⠤⣬⣿⠀⠀⠀⢠⡾⠃⠀⢀⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⠃⠀⢀⠀⢀⠴⣾⠒⡾⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠉⠛⠦⢿⡤⠶⢶⣿⢿⠙⠶⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡞⢐⣐⠴⠋⢁⠄⠀⣺⡟⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢹⠀⠀⠋⠙⡿⠀⠀⠀⠇⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣰⣰⠞⠁⠀⢀⡀⠀⢠⡿⠀⢀⣤⣤⠤⠤⣀⣀⠀⠀⠀⠀⠀⠀⠀⠀⣿⠀⠀⠘⠀⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣿⡠⣀⠔⢋⡄⠀⢀⢘⠇⡰⣿⠁⣠⢴⡒⣒⣂⣍⣛⠲⢦⡀⢀⡀⡂⠀⠀⠀⢸⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⠧⠉⠀⠀⠉⠀⠀⣨⠊⠁⣠⠾⢻⢸⣾⡿⠗⠒⠛⠛⠢⠸⣍⣭⠉⠹⠵⠶⣴⣿⢱⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡾⠀⠀⡰⠋⠓⣦⠞⠀⣴⠊⠁⠀⠘⡈⠉⠀⠀⠀⠀⠀⠀⠀⣽⠋⣯⠔⠚⠋⠋⠉⠁⡼⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡇⠀⠀⡇⢰⠋⠊⠿⢾⡇⠀⠀⠀⠀⠙⠦⢤⣤⣀⡀⡀⠀⣸⠇⠀⢹⠆⠀⠀⠀⠀⢰⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢱⣴⠀⣇⢸⠋⡇⠀⢈⡇⠀⠀⠀⠀⠀⠀⠀⠀⠈⠉⠙⠛⢷⣾⠀⠘⣇⣀⣀⡀⢀⡼⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⢸⠀⠈⠧⡉⢁⠄⠘⣿⡄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠙⡟⠳⣽⠃⠀⠀⠉⡏⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣼⠄⡀⠀⠀⠉⠉⠀⠲⠁⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⠁⠀⠀⠀⢀⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠁⠘⠃⠂⠀⠀⠀⢀⡀⠁⢳⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⠖⠒⠲⠦⠤⡄⠀⠀⠠⡋⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⠀⠀⠀⠀⣏⠀⠀⣃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠤⠤⠄⠀⠀⠠⡬⠀⠇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⠀⢰⠀⡆⣢⢶⠘⢿⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡇⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⠀⡎⣁⡇⢻⡌⢧⡀⠙⠳⣄⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢹⠀⣇⣾⠧⠈⠇⠀⠳⡄⠀⠈⠓⢤⣀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡜⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠠⣿⢸⣹⣦⣀⠀⠀⠀⠘⢦⡀⠀⠀⠙⠻⢶⣤⣤⣀⣀⣀⣀⡼⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢰⠏⠉⠛⣧⠈⠓⢦⣀⠀⠀⠱⡄⠀⠀⠀⠀⠀⠉⠛⢳⣿⠃⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣴⠃⠀⠀⠀⢸⡀⠀⠀⠈⠙⠲⢤⣿⠀⠀⠀⠀⠀⣀⠤⠛⡟⠧⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣀⡠⠤⠴⠖⢻⡇⠀⠀⠀⠀⠀⣧⠀⠀⠀⠀⠀⠀⠈⠙⠒⠤⣶⠛⠀⠀⢸⠀⠀⢦⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢀⣀⣀⣤⠤⠶⠒⠛⠉⠉⠀⠀⠀⠀⠀⢸⠃⠀⠀⠀⠀⠀⢸⡆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡀⢠⡴⢦⡀⠘⣆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⣀⣀⡤⠴⠒⠚⠋⠉⠉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣾⠀⠀⠀⠀⠀⠀⠀⢿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⣼⠋⠀⠀⠀⢹⣧⠀⣧⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⢠⡴⢿⡉⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡏⠀⠀⠀⠀⠀⠀⠀⠘⣷⡀⠀⠀⠀⠀⠀⠀⢀⡼⣇⠀⠀⠀⠀⠀⠀⢹⣼⠐⢢⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⢠⠏⠀⠀⠛⣦⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡗⠀⠀⠀⠀⠀⠀⠀⠀⢳⠻⣦⠀⠀⠀⠀⢀⡞⠁⠈⠛⠲⠤⣶⢫⠙⢿⠀⠀⢡⠉⠓⠦⢄⡀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⢀⠏⠀⠀⠀⠀⠘⣧⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢠⠀⠀⠀⠀⠀⠀⠀⠀⠀⠘⣇⠈⢷⡄⠀⢀⡞⠀⠀⠀⠀⠀⠀⡿⠀⠹⠀⠸⡄⠀⢰⡀⠀⠀⠀⠁⠠⢀⠀⠀⠀⠀⠀⠀
⠟⠀⠀⠀⠀⠀⠀⠘⣆⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢸⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢹⡄⠀⠙⢦⡾⠀⠀⠀⠀⠀⠀⠀⢸⠀⠀⡇⠀⠈⣇⠀⢰⡄⠀⠀⠀⠀⠀⠀⠀⠐⠢⠄⡀
⣀⣀⣀⣀⣀⣀⣀⣀⣸⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣇⣀⣀⣀⣀⣀⣸⣀⣀⣀⣀⣀⣛⣊⣈⣀⣀⣀⣀⣀⣀⣀⣀⣀⣀⣈⣑⣆⠀⠀⠀⠀⠀
      `

  ]

    setTimeout(() => {
      const randomArt = gundamArts[Math.floor(Math.random() * gundamArts.length)]
      setAsciiArt(randomArt + `\n\nGENERATED FOR: "${prompt}"\nMEME FACTOR: ${Math.floor(Math.random() * 100) + 1}%`)
      setIsGenerating(false)
    }, 2000)
  }

// ...existing code...
const handleCommand = (e: React.FormEvent) => {
  e.preventDefault();
  if (currentCommand.trim()) {
    generateASCII(currentCommand);
    setTerminalText((prev) => prev + `> ${currentCommand}\n`);
    setCurrentCommand("");
  }
};
// ...existing code...
  return (
    <div className="min-h-screen bg-[#0A0F0D] text-[#39FF14] font-mono relative overflow-hidden">
      {/* CRT Scanlines Effect */}
      <div className="fixed inset-0 pointer-events-none opacity-10">
        <div className="h-full w-full bg-gradient-to-b from-transparent via-[#39FF14] to-transparent bg-[length:100%_4px] animate-pulse"></div>
      </div>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center p-4 relative pt-14 md:pt-20">
        <div className="absolute top-4 left-4 text-xs opacity-60 mb-2 z-20">SYSTEM STATUS: ONLINE | MEME LEVEL: MAXIMUM</div>

        <div className="w-full max-w-6xl mx-auto">
          <div className="text-center mb-8 relative z-10">
            <h1 className="text-4xl md:text-7xl font-bold mb-4 text-[#00AEEF] tracking-wider">
              GUNDAM<span className="text-[#FF3B3B]">CTO</span>
            </h1>
            <p className="text-lg md:text-2xl mb-2 text-[#39FF14]">{">"} MOBILE SUIT MEME PROTOCOL ACTIVATED</p>
            <p className="text-sm opacity-80">The most based mecha token in the metaverse</p>
          </div>

          {/* Terminal Console */}
                  <Card className="bg-black/80 border-[#39FF14] border-2 p-6 mb-8 shadow-[0_0_20px_#39FF14] relative z-10">
          <div className="flex items-center mb-4">
            <Terminal className="mr-2 text-[#39FF14]" size={20} />
            <span className="text-[#00AEEF] font-bold">MECHA_GENERATOR_v2.1</span>
          </div>

          <div className="bg-black p-4 rounded border border-[#39FF14]/30 h-64 overflow-y-auto mb-4 text-sm">
            <pre className="whitespace-pre-wrap text-gray-300">{terminalText}</pre>
            {showCursor && <span className="bg-[#39FF14] text-black">█</span>}
          </div>

          <div className="flex gap-2">
            <span className="text-[#39FF14]">{">"}</span>
            <Input
              value={currentCommand}
              onChange={(e) => setCurrentCommand(e.target.value)}
              placeholder="Enter command (try 'sudo moon mission' or 'launch gundam')"
              className="bg-transparent border-none text-[#39FF14] placeholder-[#39FF14]/50 focus:ring-0"
              disabled={isGenerating}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  if (currentCommand.trim()) {
                    generateASCII(currentCommand);
                    setTerminalText((prev) => prev + `> ${currentCommand}\n`);
                    setCurrentCommand("");
                  }
                }
              }}
            />
            <Button
              type="button"
              disabled={isGenerating}
              className="bg-[#FF3B3B] hover:bg-[#FF3B3B]/80 text-white border-none"
              onClick={() => {
                if (currentCommand.trim()) {
                  generateASCII(currentCommand);
                  setTerminalText((prev) => prev + `> ${currentCommand}\n`);
                  setCurrentCommand("");
                }
              }}
            >
              {isGenerating ? "GENERATING..." : "EXECUTE"}
            </Button>
          </div>
        </Card>
          {/* ASCII Art Display */}
          {asciiArt && (
            <Card className="bg-black/90 border-[#00AEEF] border-2 p-6 shadow-[0_0_20px_#00AEEF] relative z-10">
              <pre className="text-xs md:text-sm text-[#00AEEF] whitespace-pre-wrap overflow-x-auto">{asciiArt}</pre>
            </Card>
          )}
        </div>
      </section>

      {/* Gundam Reference Section */}
      
      <section className="py-4 sm:py-8 px-2 sm:px-4 border-t border-[#39FF14]/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
          <Card className="bg-black/90 border-[#00AEEF] border-2 p-3 sm:p-4 hover:border-[#00AEEF] hover:shadow-[0_0_20px_#00AEEF] transition-all duration-300 transform hover:scale-105">
            <div className="text-center mb-3 sm:mb-4">
              <h3 className="text-base sm:text-lg font-bold text-[#00AEEF] mb-2">RX-78-2 GUNDAM</h3>
            </div>
            <div className="h-48 sm:h-64 mb-3 sm:mb-4 overflow-hidden rounded border border-[#39FF14]/30 bg-black p-2 sm:p-4">
              <pre className="text-[#00AEEF] text-[8px] sm:text-xs leading-tight overflow-hidden">
                {`   
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠠⣀⠀⡀⠀⣀⠠⠀⠀⠀⢀⢬⠇⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⢐⡄⠀⠀⣠⣟⣿⣿⣅⠀⠀⠀⠠⣒⠋⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠟⡄⢰⣧⣯⣃⡏⣿⡄⢀⣰⣩⠁⠤⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⡜⠌⢟⣯⡭⠫⠃⠉⡩⠁⠀⡐⣠⣤⡁⠀⠀
⠀⠀⠀⠀⠀⠀⢀⠐⡠⠋⠁⠉⠉⢀⣀⡀⢠⣾⢁⡀⣌⠜⠩⢻⠏⠀⠀
⠀⠀⠀⠀⠀⠀⠨⣀⣯⠻⠀⠀⣰⣿⣟⣛⣛⣿⣦⣶⡅⠀⠀⢩⠄⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠊⢸⣇⠿⠋⢿⡏⠀⠀⢈⣿⣿⡿⠚⡠⠔⠊⢹⡄⠀
⠀⠀⠀⠀⠀⠀⡘⠀⣆⢸⠺⠍⠻⠋⠉⠉⢺⣿⡟⠀⠀⠀⠂⠉⠈⡱⠀
⠀⠀⠀⠀⠀⠄⠀⠬⠒⠓⡞⢟⢋⠈⠉⡉⠋⡹⠙⠢⠀⠠⠀⠀⠘⣁⠃
⠀⠀⠀⠀⡌⣤⣼⣧⠀⡁⠀⠁⢸⡂⢀⣣⠄⡇⢢⠑⠆⠀⢕⡌⠒⠢⣚
⠀⠀⠀⠀⢯⣉⣿⣿⣍⢇⠀⢀⢈⠠⠄⢐⡀⠥⣂⠌⡆⠀⠆⣱⣀⢰⣷
⠀⠀⠀⠐⢭⣦⣿⡏⡇⠀⠱⠢⠥⡯⡁⠀⠀⠀⠇⢑⠁⠀⠲⣏⣤⣿⡿
⠀⠀⠀⠀⠀⠙⠛⠁⠇⠀⠀⠀⠀⡇⠛⠀⠀⠀⠀⢸⠀⠀⠀⠈⠉⠛⠁
⠀⠀⠀⠀⠀⠀⠀⠀⠠⠀⡀⠀⠀⡇⠘⠂⡄⠒⢢⡈⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⢀⠁⠀⢨⠣⢠⡁⠀⡹⠀⠀⠀⠒⠢⡀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠘⠀⠀⠘⢠⣥⠅⠀⢄⡀⠀⠀⠀⢡⡇⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠖⠁⠁⠃⠀⠈⣅⠀⠀⢀⡂⠛⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠐⠀⡴⢇⠀⠄⡀⠀⢠⠸⢦⣀⡾⡈⠀⡇⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⡭⠁⠙⠔⠠⠁⠀⠀⢂⡄⠃⠃⢱⡀⠁⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⢠⠀⠀⡆⠑⠁⠀⠀⠀⠀⡇⠀⠀⠀⡌⡀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⡀⠂⣀⣰⠁⠀⡀⠀⠀⠀⢀⡠⠀⠒⠒⢻⢥⠀⠀⠀⠀
⠀⠀⠀⠀⣠⣊⣀⣠⠞⠑⠄⡤⡃⠀⠀⠀⡈⣃⣀⣀⠤⣤⣆⢣⢀⠀⠀
⠀⢀⠠⢐⣉⣀⠜⠁⠓⠤⡈⢈⡀⠀⠀⡆⢝⠃⠀⠀⠀⠀⡎⠳⣎⡄⠀
⢔⣁⣀⣀⣠⣿⣿⣶⣦⣤⣤⣾⡇⠀⠀⡩⠺⠉⠉⠉⠉⠉⠹⣶⣔⡀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠈⠉⠉⠉⠁⠀⠠⠤⠿⠤⠤⠤⠤⠤⠼⢿⣿⣧⠀
    
    STATUS: [████████] 100%
    BEAM RIFLE: READY
    SHIELD: EQUIPPED`}
              </pre>
            </div>
            <div className="text-xs text-gray-300 space-y-1">
              <div className="flex justify-between">
                <span>PILOT:</span>
                <span className="text-[#00AEEF]">AMURO RAY</span>
              </div>
              <div className="flex justify-between">
                <span>STATUS:</span>
                <span className="text-[#39FF14]">READY</span>
              </div>
            </div>
          </Card>

          <Card className="bg-black/90 border-[#FF3B3B] border-2 p-3 sm:p-4 hover:shadow-[0_0_20px_#FF3B3B] transition-all duration-300 transform hover:scale-105">
            <div className="text-center mb-3 sm:mb-4">
              <h3 className="text-base sm:text-lg font-bold text-[#FF3B3B] mb-2">BARBATOS LUPUS</h3>
            </div>
            <div className="relative h-48 sm:h-64 mb-3 sm:mb-4 overflow-hidden rounded border border-[#FF3B3B]/30 bg-black p-2 sm:p-4">
              <pre className="text-[#FF3B3B] text-[8px] sm:text-xs leading-tight overflow-hidden">
                {`   
              
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⡄⠀⠀⠀⣠⠀⠀⠀⠀⢀⠴⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠉⡢⡀⠀⠀⢰⠔⣠⣤⡴⠀⠀⠀⢀⠔⠑⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⢄⠐⠤⠤⡆⢻⣿⡇⠌⠐⠂⠑⡈⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⢀⡀⡀⠤⠄⢀⠀⠀⠁⠒⣬⣤⣘⡈⠉⡀⡤⣴⢾⠁⠀⠀⠀⣠⠐⠀⠀⠀⠂⡔⠤⡀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⢀⠴⡛⠁⠀⠀⠀⠀⣴⣢⠀⠀⠙⡽⣿⣿⡿⠽⡯⢖⠁⣥⣄⠀⡾⠁⠀⠀⠀⠀⠐⡄⠀⠙⡄⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠎⣾⠁⠀⠀⠀⠀⠀⣿⣿⣆⠀⡸⣿⣿⣷⣧⢾⠅⣁⣬⣿⣇⡖⠁⠀⠘⠀⠀⠀⠀⢸⣠⡄⢁⠀⠀⠀⠀⠀
⠀⠀⠀⢸⣼⡯⣄⠀⠀⠁⠀⠀⡸⢻⡿⣿⡇⣿⡟⡙⡟⢣⣾⣿⣿⣿⠉⣽⣤⣄⡄⠀⠀⠀⠴⠋⠉⠻⢾⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠁⠀⠐⢤⡀⣤⣿⣿⢡⣿⣼⣽⠐⠓⠛⠓⠡⣿⣿⣿⣿⡇⠰⣿⣿⣿⡾⡦⡊⠀⠈⠳⡀⠀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⣘⡯⠽⠀⡡⣱⣾⣿⡿⢿⡤⡀⠠⠄⠱⡻⢏⡻⣿⣿⡇⣿⣿⡷⡃⠀⠐⣀⣀⠀⠌⠢⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠀⢩⣶⡤⣰⣑⢯⢿⣿⣷⣥⣿⣥⠀⠃⢈⣬⡓⠈⣨⣿⣠⢿⠻⠁⠑⠴⡾⠟⠣⠈⢈⠄⠆⠀⠀⡆⠀⠀
⠀⠀⠀⠀⠀⢀⣯⣍⣰⡿⡬⡝⠠⡾⠿⣿⣿⡼⡄⢀⣁⣿⣄⣼⣿⣿⣿⣷⠀⠂⠀⠀⠙⢤⣷⣿⡍⣤⡾⠠⡢⠰⠀⠀
⠀⠀⠀⢀⣺⢿⣿⣿⣿⣷⣯⢉⡝⠀⠀⠘⣿⣿⣿⣿⣻⣿⣟⢞⣿⣟⣧⠈⢿⡾⡰⠀⠀⢈⣿⡿⠟⠻⣇⠡⠐⠀⣦⠀
⠀⠀⢀⠂⠀⠙⠻⣽⣧⣿⢯⡿⠣⣀⣀⣀⣿⡿⢿⢷⣿⡿⣎⠀⡻⠟⠺⣀⣾⠳⢧⢑⡀⠟⠁⠀⢰⠀⠈⠳⠔⠀⠐⡇
⠀⠀⡂⠀⠀⠀⠊⡿⣍⡈⣿⡇⠢⠀⠉⠉⣾⡻⣽⣻⠒⠋⠉⠉⠀⠀⠀⣿⣿⣧⠀⢒⡌⢠⠀⠀⠘⠀⠀⠀⠀⠀⠆⡇
⠀⣰⣥⠀⠆⡁⡜⡗⠎⢁⣿⣿⠈⣦⡐⣌⣸⣿⠽⠣⡇⠀⠀⢠⢾⠀⣼⣫⣿⣿⡆⠀⢳⠀⢳⣾⡀⠀⠀⠀⠀⠈⠀⡇
⣰⣾⣮⣤⠊⢜⢜⣽⣶⣾⣿⣯⣇⠼⣹⣞⢃⠀⠀⡀⡇⡰⠀⡠⣰⡠⠙⠻⣽⠙⣿⡀⢈⣧⡀⢻⣿⣾⣷⠀⠀⠂⠀⡇
    MACE: EQUIPPED
    CLAWS: EXTENDED`}
              </pre>
            </div>
            <div className="text-xs text-gray-300 space-y-1">
              <div className="flex justify-between">
                <span>PILOT:</span>
                <span className="text-[#FF3B3B]">MIKAZUKI AUGUS</span>
              </div>
              <div className="flex justify-between">
                <span>STATUS:</span>
                <span className="text-[#39FF14]">ACTIVE</span>
              </div>
            </div>
          </Card>

          <Card className="bg-black/90 border-[#39FF14] border-2 p-3 sm:p-4 md:col-span-2 lg:col-span-1 hover:border-[#39FF14] hover:shadow-[0_0_20px_#39FF14] transition-all duration-300 transform hover:scale-105">
            <div className="text-center mb-3 sm:mb-4">
              <h3 className="text-base sm:text-lg font-bold text-[#39FF14] mb-2">STRIKE FREEDOM</h3>
            </div>
            <div className="relative h-48 sm:h-64 mb-3 sm:mb-4 overflow-hidden rounded border border-[#39FF14]/30 bg-black p-2 sm:p-4">
              <pre className="text-[#39FF14] text-[8px] sm:text-xs leading-tight overflow-hidden">
                {`   
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⡿⣿⣿⣿⣿⣿⣿⠿⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣦⣍⠙⠻⢿⡏⠾⠿⢸⡿⠿⠛⣩⣴⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠂⠀⠠⠀⠀⠁⠀⠐⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠁⠂⠀⠀⠀⠀⠈⠀⠀⠀⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⠏⠭⠈⠰⣮⣭⠿⠿⣯⣥⠆⠀⠨⠙⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⠀⠩⠀⠀⠘⠀⠀⠀⠀⠀⠀⠀⠌⠀⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⠀⢐⠀⠀⢀⠀⡈⢑⠀⠀⠀⠀⡃⠀⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣆⣀⣀⣠⣼⣿⣧⣤⣾⣷⣄⣄⣁⣠⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
    STATUS: [████████] 100%
    DRAGOONS: DEPLOYED
    FREEDOM: ULTIMATE`}
              </pre>
            </div>
            <div className="text-xs text-gray-300 space-y-1">
              <div className="flex justify-between">
                <span>PILOT:</span>
                <span className="text-[#39FF14]">KIRA YAMATO</span>
              </div>
              <div className="flex justify-between">
                <span>STATUS:</span>
                <span className="text-[#39FF14]">ULTIMATE</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>



      {/* About Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold text-[#00AEEF] mb-4">{">"} cat about.txt</h2>
          <div className="bg-black/80 border border-[#39FF14] p-6 rounded">
            <p className="text-gray-300 mb-4">
              GUNDAMMEME is not just another meme token - it's a full-scale mobile suit deployment in the DeFi
              battlefield. Born from the fusion of legendary mecha anime and internet degeneracy, we're here to pilot
              our way to the moon with the power of the RX-78-2.
            </p>
            <p className="text-gray-300 mb-4">
              Our mission: To create the most based, community-driven token that combines the epic scale of Gundam
              warfare with the chaotic energy of meme culture. Every holder becomes a Newtype in the financial cosmos.
            </p>
            <p className="text-gray-300">
              Remember: In space, no one can hear you HODL. But they can see your diamond hands.
            </p>
            <div className="mt-4 text-xs opacity-60">
              [PRESS ANY KEY TO CONTINUE]<span className="animate-pulse">█</span>
            </div>
          </div>
        </div>
      </section>

      {/* Tokenomics Section */}
      <section className="py-16 px-4 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold text-[#00AEEF] mb-8 text-center">
            {">"} ./tokenomics.exe --display
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-black/80 border-[#39FF14] border-2 p-6">
              <h3 className="text-xl font-bold text-[#FF3B3B] mb-4 flex items-center">
                <Target className="mr-2" size={20} />
                SUPPLY ALLOCATION
              </h3>
              <div className="space-y-3 text-sm text-gray-300">
                <div className="flex justify-between">
                  <span>Community Rewards (Newtype Program)</span>
                  <span className="text-[#39FF14]">40%</span>
                </div>
                <div className="flex justify-between">
                  <span>Liquidity Pool (Minovsky Reactor)</span>
                  <span className="text-[#39FF14]">30%</span>
                </div>
                <div className="flex justify-between">
                  <span>Development Fund (R&D Division)</span>
                  <span className="text-[#39FF14]">20%</span>
                </div>
                <div className="flex justify-between">
                  <span>Marketing Memes (Propaganda Unit)</span>
                  <span className="text-[#39FF14]">10%</span>
                </div>
              </div>
            </Card>

            <Card className="bg-black/80 border-[#00AEEF] border-2 p-6">
              <h3 className="text-xl font-bold text-[#FF3B3B] mb-4 flex items-center">
                <Shield className="mr-2" size={20} />
                MECHA SPECS
              </h3>
              <div className="space-y-3 text-sm text-gray-300">
                <div className="flex justify-between">
                  <span>Total Supply (Mobile Suits)</span>
                  <span className="text-[#00AEEF]">999,719,633.201</span>
                </div>
                <div className="flex justify-between">
                  <span>Network (Earth Federation)</span>
                  <span className="text-[#00AEEF]">SOL</span>
                </div>
                <div className="flex justify-between">
                  <span>Tax (Beam Rifle Efficiency)</span>
                  <span className="text-[#00AEEF]">0% (Based)</span>
                </div>
                <div className="flex justify-between">
                  <span>Liquidity (Armor Integrity)</span>
                  <span className="text-[#00AEEF]">LOCKED</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold text-[#00AEEF] mb-8">{">"} tail -f deployment.log</h2>

          <div className="bg-black/80 border border-[#39FF14] p-6 rounded">
            <div className="space-y-4 text-sm text-gray-300">
              <div className="flex items-center">
                <span className="text-[#39FF14] mr-2">[✓]</span>
                <span>Phase 1: RX-78-2 Mobile Suit Assembly Complete</span>
              </div>
              <div className="flex items-center">
                <span className="text-[#39FF14] mr-2">[✓]</span>
                <span>Phase 2: Newtype Pilot Training Program Initiated</span>
              </div>
              <div className="flex items-center">
                <span className="text-[#FF3B3B] mr-2">[⚡]</span>
                <span className="text-[#FF3B3B]">Phase 3: Beam Rifle Meme Cannon Deployment (IN PROGRESS)</span>
              </div>
              <div className="flex items-center">
                <span className="text-[#39FF14]/50 mr-2">[ ]</span>
                <span className="opacity-50">Phase 4: Side 3 Lunar Base Construction</span>
              </div>
              <div className="flex items-center">
                <span className="text-[#39FF14]/50 mr-2">[ ]</span>
                <span className="opacity-50">Phase 5: One Year War Against Paper Hands</span>
              </div>
              <div className="flex items-center">
                <span className="text-[#39FF14]/50 mr-2">[ ]</span>
                <span className="opacity-50">Phase 6: Universal Century Domination</span>
              </div>
            </div>
            <div className="mt-6 text-xs opacity-60 text-gray-400">
              SYSTEM STATUS: DEPLOYING TO PRODUCTION...<span className="animate-pulse">█</span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gradient-to-b from-black/20 to-black/40 relative overflow-hidden">
        {/* Starfield Background */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-1 h-1 bg-white rounded-full animate-pulse"></div>
          <div className="absolute top-20 right-20 w-1 h-1 bg-white rounded-full animate-pulse delay-100"></div>
          <div className="absolute top-40 left-1/4 w-1 h-1 bg-white rounded-full animate-pulse delay-200"></div>
          <div className="absolute top-60 right-1/3 w-1 h-1 bg-white rounded-full animate-pulse delay-300"></div>
          <div className="absolute bottom-20 left-1/2 w-1 h-1 bg-white rounded-full animate-pulse delay-500"></div>
          <div className="absolute bottom-40 right-10 w-1 h-1 bg-white rounded-full animate-pulse delay-700"></div>
        </div>

        <div className="max-w-7xl mx-auto relative">
          <h2 className="text-3xl md:text-5xl font-bold text-[#00AEEF] mb-12 text-center font-mecha tracking-wider">
            {">"} GUNDAM THROUGH THE AGES
          </h2>

          {/* Timeline Container */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-[#39FF14] via-[#00AEEF] to-[#FF3B3B] transform -translate-y-1/2 hidden md:block"></div>

            {/* Timeline Items */}
            <div className="grid grid-cols-1 md:grid-cols-6 gap-8 md:gap-4">
              {/* 1979 - Original Gundam */}
              <div className="group relative">
                <div className="bg-black/90 border-2 border-[#39FF14] rounded-lg p-4 hover:border-[#39FF14] hover:shadow-[0_0_20px_#39FF14] transition-all duration-300 transform hover:scale-105">
                  <div className="text-center mb-4">
                    <div className="text-2xl font-bold text-[#39FF14] mb-1">1979</div>
                    <div className="text-sm text-gray-300">Mobile Suit Gundam</div>
                  </div>

                  <div className="bg-black border border-[#39FF14]/30 rounded p-2 mb-3 h-32 flex items-center justify-center">
                    <pre className="text-[#39FF14] text-xs leading-tight">
                      {`    ▄▄▄
   █▀▀▀█
   █ ◉ █
   █▄▄▄█
    ███
   █████
  ███████
   █████
    ███
   █   █
  ██   ██`}
                    </pre>
                  </div>

                  <div className="text-xs text-gray-400 text-center">
                    <div>RX-78-2</div>
                    <div className="text-[#39FF14]">THE ORIGINAL</div>
                  </div>
                </div>

                {/* Timeline Dot */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-[#39FF14] rounded-full border-2 border-black shadow-[0_0_10px_#39FF14] hidden md:block"></div>
              </div>

              {/* 1985 - Zeta Gundam */}
              <div className="group relative">
                <div className="bg-black/90 border-2 border-[#00AEEF] rounded-lg p-4 hover:border-[#00AEEF] hover:shadow-[0_0_20px_#00AEEF] transition-all duration-300 transform hover:scale-105">
                  <div className="text-center mb-4">
                    <div className="text-2xl font-bold text-[#00AEEF] mb-1">1985</div>
                    <div className="text-sm text-gray-300">Zeta Gundam</div>
                  </div>

                  <div className="bg-black border border-[#00AEEF]/30 rounded p-2 mb-3 h-32 flex items-center justify-center">
                    <pre className="text-[#00AEEF] text-xs leading-tight">
                      {`   ▲▲▲
  ▲▀▀▀▲
  █ ◉ █
  █▄▄▄█
   ███
  █████
 ███████
  █████
 ▲█████▲
 █  █  █
██  █  ██`}
                    </pre>
                  </div>

                  <div className="text-xs text-gray-400 text-center">
                    <div>MSZ-006</div>
                    <div className="text-[#00AEEF]">TRANSFORMABLE</div>
                  </div>
                </div>

                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-[#00AEEF] rounded-full border-2 border-black shadow-[0_0_10px_#00AEEF] hidden md:block"></div>
              </div>

              {/* 1995 - Gundam Wing */}
              <div className="group relative">
                <div className="bg-black/90 border-2 border-[#FF3B3B] rounded-lg p-4 hover:border-[#FF3B3B] hover:shadow-[0_0_20px_#FF3B3B] transition-all duration-300 transform hover:scale-105">
                  <div className="text-center mb-4">
                    <div className="text-2xl font-bold text-[#FF3B3B] mb-1">1995</div>
                    <div className="text-sm text-gray-300">Gundam Wing</div>
                  </div>

                  <div className="bg-black border border-[#FF3B3B]/30 rounded p-2 mb-3 h-32 flex items-center justify-center">
                    <pre className="text-[#FF3B3B] text-xs leading-tight">
                      {`  ▄█▀▀▀█▄
 ▄█ ◉ ◉ █▄
 ██▄▄▄▄▄██
  ███████
 ▄███████▄
▄█████████▄
 ▀███████▀
  ▀█████▀
   █████
  ██   ██
 ███   ███`}
                    </pre>
                  </div>

                  <div className="text-xs text-gray-400 text-center">
                    <div>XXXG-01W</div>
                    <div className="text-[#FF3B3B]">WING ZERO</div>
                  </div>
                </div>

                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-[#FF3B3B] rounded-full border-2 border-black shadow-[0_0_10px_#FF3B3B] hidden md:block"></div>
              </div>

              {/* 2007 - Gundam 00 */}
              <div className="group relative">
                <div className="bg-black/90 border-2 border-[#39FF14] rounded-lg p-4 hover:border-[#39FF14] hover:shadow-[0_0_20px_#39FF14] transition-all duration-300 transform hover:scale-105">
                  <div className="text-center mb-4">
                    <div className="text-2xl font-bold text-[#39FF14] mb-1">2007</div>
                    <div className="text-sm text-gray-300">Gundam 00</div>
                  </div>

                  <div className="bg-black border border-[#39FF14]/30 rounded p-2 mb-3 h-32 flex items-center justify-center">
                    <pre className="text-[#39FF14] text-xs leading-tight">
                      {`   ▄███▄
  ▄█▀▀▀█▄
  █ ◉ ◉ █
  █▄▄█▄▄█
   █████
  ███████
 █████████
  ███████
   █████
  ▄█████▄
 ██  █  ██`}
                    </pre>
                  </div>

                  <div className="text-xs text-gray-400 text-center">
                    <div>GN-0000</div>
                    <div className="text-[#39FF14]">00 RAISER</div>
                  </div>
                </div>

                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-[#39FF14] rounded-full border-2 border-black shadow-[0_0_10px_#39FF14] hidden md:block"></div>
              </div>

              {/* 2010 - Unicorn */}
              <div className="group relative">
                <div className="bg-black/90 border-2 border-[#00AEEF] rounded-lg p-4 hover:border-[#00AEEF] hover:shadow-[0_0_20px_#00AEEF] transition-all duration-300 transform hover:scale-105">
                  <div className="text-center mb-4">
                    <div className="text-2xl font-bold text-[#00AEEF] mb-1">2010</div>
                    <div className="text-sm text-gray-300">Unicorn Gundam</div>
                  </div>

                  <div className="bg-black border border-[#00AEEF]/30 rounded p-2 mb-3 h-32 flex items-center justify-center">
                    <pre className="text-[#00AEEF] text-xs leading-tight">
                      {`    ▲
   ▲█▲
  ▄███▄
 ▄█▀▀▀█▄
 █ ◉ ◉ █
 █▄▄▄▄▄█
  ███████
 █████████
  ███████
   █████
  ██   ██`}
                    </pre>
                  </div>

                  <div className="text-xs text-gray-400 text-center">
                    <div>RX-0</div>
                    <div className="text-[#00AEEF]">UNICORN</div>
                  </div>
                </div>

                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-[#00AEEF] rounded-full border-2 border-black shadow-[0_0_10px_#00AEEF] hidden md:block"></div>
              </div>

              {/* 2022 - Witch from Mercury */}
              <div className="group relative">
                <div className="bg-black/90 border-2 border-[#FF3B3B] rounded-lg p-4 hover:border-[#FF3B3B] hover:shadow-[0_0_20px_#FF3B3B] transition-all duration-300 transform hover:scale-105">
                  <div className="text-center mb-4">
                    <div className="text-2xl font-bold text-[#FF3B3B] mb-1">2022</div>
                    <div className="text-sm text-gray-300">Witch from Mercury</div>
                  </div>

                  <div className="bg-black border border-[#FF3B3B]/30 rounded p-2 mb-3 h-32 flex items-center justify-center">
                    <pre className="text-[#FF3B3B] text-xs leading-tight">
                      {`  ▄▄███▄▄
 ▄█▀▀▀▀▀█▄
 █ ◉   ◉ █
 █▄▄▄█▄▄▄█
  ███████
 █████████
▄█████████▄
 ▀███████▀
  ▀█████▀
  ██   ██
 ███   ███`}
                    </pre>
                  </div>

                  <div className="text-xs text-gray-400 text-center">
                    <div>XVX-016</div>
                    <div className="text-[#FF3B3B]">AERIAL</div>
                  </div>
                </div>

                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-[#FF3B3B] rounded-full border-2 border-black shadow-[0_0_10px_#FF3B3B] hidden md:block"></div>
              </div>
            </div>
          </div>

          {/* Timeline Stats */}
          <div className="mt-12 text-center">
            <div className="bg-black/80 border border-[#39FF14] rounded-lg p-6 max-w-2xl mx-auto">
              <div className="grid grid-cols-3 gap-4 text-sm">
                <div>
                  <div className="text-2xl font-bold text-[#39FF14]">45+</div>
                  <div className="text-gray-300">Years of Evolution</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#00AEEF]">50+</div>
                  <div className="text-gray-300">Series & Movies</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-[#FF3B3B]">∞</div>
                  <div className="text-gray-300">Meme Potential</div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Navigation Hint */}
          <div className="mt-8 text-center md:hidden">
            <p className="text-xs text-gray-400">
              {"<"} Swipe to explore timeline {">"}
            </p>
          </div>
        </div>
      </section>



      {/* Community Section */}
<div className="flex justify-center">
  
  <div className="grid md:grid-cols-2 gap-6 w-full max-w-2xl">
    <a
      href="https://t.me/+G7_N-GE8gvUzN2E9"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-black/80 border-[#39FF14] border-2 p-6 text-center rounded transition-shadow hover:shadow-[0_0_20px_#39FF14] cursor-pointer block"
      style={{ textDecoration: "none" }}
    >
      <Users className="mx-auto mb-4 text-[#39FF14]" size={40} />
      <h3 className="text-lg font-bold text-[#FF3B3B] mb-2">TELEGRAM</h3>
      <p className="text-sm opacity-80 text-gray-300">Join the White Base crew</p>
    </a>

    <a
      href="https://x.com/GundamOnBonk"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-black/80 border-[#00AEEF] border-2 p-6 text-center rounded transition-shadow hover:shadow-[0_0_20px_#00AEEF] cursor-pointer block"
      style={{ textDecoration: "none" }}
    >
      <TrendingUp className="mx-auto mb-4 text-[#00AEEF]" size={40} />
      <h3 className="text-lg font-bold text-[#FF3B3B] mb-2">TWITTER</h3>
      <p className="text-sm opacity-80 text-gray-300">Follow for Newtype insights</p>
    </a>
    {/* 
    <a
      href="https://discord.gg/yourdiscord"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-black/80 border-[#FF3B3B] border-2 p-6 text-center rounded transition-shadow hover:shadow-[0_0_20px_#FF3B3B] cursor-pointer block"
      style={{ textDecoration: "none" }}
    >
      <Zap className="mx-auto mb-4 text-[#FF3B3B]" size={40} />
      <h3 className="text-lg font-bold text-[#FF3B3B] mb-2">DISCORD</h3>
      <p className="text-sm opacity-80 text-gray-300">Federation HQ</p>
    </a> 
    */}
  </div>



</div>
    <section className="py-16 px-4">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-2xl md:text-4xl font-bold text-[#00AEEF] mb-8">READY TO PILOT YOUR MECHA?</h2>

        <a
          href="https://letsbonk.fun/token/7c21xTnFy2CH4Td13JbDvPtFHnKqpbsM4Pw5Z3pCbonk"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center bg-[#FF3B3B] hover:bg-[#FF3B3B]/80 text-white text-xl px-8 py-4 border-2 border-[#FF3B3B] shadow-[0_0_20px_#FF3B3B] hover:shadow-[0_0_30px_#FF3B3B] transition-all duration-300 rounded cursor-pointer"
          style={{ textDecoration: "none" }}
        >
          <Rocket className="mr-2" size={24} />
          LAUNCH TO MOON
        </a>

        <p className="mt-4 text-sm opacity-60">{">"} sudo buy_token --amount=moon --destination=lambo</p>
      </div>
    </section>
      {/* Footer */}
      <footer className="py-10 px-4 border-t border-[#39FF14]/30">
        <div className="max-w-4xl mx-auto text-center text-xs opacity-60 mb-2">
          <p>© 2024 GUNDAMMEME | Not financial advice | DYOR | May contain traces of hopium</p>
          <p className="mt-2">Built by degens, for degens | Powered by memes and dreams</p>
        </div>
        <div className="absolute bottom-2 right-4 mt-2 ">
          <a
            href="https://t.me/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-xs text-[#39FF14]/70 hover:text-[#39FF14] transition-colors duration-300 bg-black/50 border border-[#39FF14]/30 rounded px-3 py-2 hover:border-[#39FF14] hover:shadow-[0_0_10px_#39FF14]"
          >
            <Terminal size={12} />
            <span>Made by @Basusali</span>
          </a>
        </div>
      </footer>
    </div>
  )
}
