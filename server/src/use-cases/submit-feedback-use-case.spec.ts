import { SubmitFeedbackUseCase } from "./submit-feedback-use-case"

const createFeedbackSpy = jest.fn()
const sendMailSpy = jest.fn()

const submitFeedback = new SubmitFeedbackUseCase(
  { create: createFeedbackSpy },
  { sendMail: sendMailSpy }
)

describe('Submit feedback', () => {
  it('should be able to submit feedback', async () => {
    await expect(submitFeedback.execute({
      type: 'BUG',
      comment: 'example feedback',
      screenshot: 'data:image/png.base64,sdfskjdfsjbdfjks'
    })).resolves.not.toThrow()

    expect(createFeedbackSpy).toHaveBeenCalled()
    expect(sendMailSpy).toHaveBeenCalled()

  })

  it('should not be able to submit feedback without type', async () => {
    await expect(submitFeedback.execute({
      type: '',
      comment: 'example feedback',
      screenshot: 'data:image/png.base64,sdfskjdfsjbdfjks'
    })).rejects.toThrow()
  })


  it('should not be able to submit feedback without comment', async () => {
    await expect(submitFeedback.execute({
      type: 'BUG',
      comment: '',
      screenshot: 'data:image/png.base64,sdfskjdfsjbdfjks'
    })).rejects.toThrow()
  })

  it('should not be able to submit feedback with invalid screenshot format', async () => {
    await expect(submitFeedback.execute({
      type: 'BUG',
      comment: 'test',
      screenshot: 'test.jpg'
    })).rejects.toThrow()
  })
})